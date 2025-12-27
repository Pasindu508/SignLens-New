/**
 * OpenRouter API Service
 * Fetches all available models from OpenRouter's public API
 */

export interface OpenRouterModel {
  id: string
  name: string
  description: string
  pricing: {
    prompt: string // Price per 1M tokens
    completion: string // Price per 1M tokens
    image?: string // Price per image (if applicable)
  }
  context_length: number
  architecture?: {
    modality: string
    tokenizer: string
    instruct_type?: string
  }
  top_provider?: {
    context_length: number
    max_completion_tokens: number
    is_moderated: boolean
  }
  per_request_limits?: {
    prompt_tokens?: string
    completion_tokens?: string
  }
}

export interface ProcessedModel {
  id: string
  name: string
  provider: string
  description: string
  tier: 'free' | 'budget' | 'mid-tier' | 'premium'
  contextLength: number
  pricing: {
    input: number
    output: number
  }
  capabilities: string[]
  releaseDate: string
  popularity: number
  popular: boolean
  modality: string[]
}

/**
 * Fetch all models from OpenRouter API
 */
export async function fetchAllModels(): Promise<OpenRouterModel[]> {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/models', {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch models: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error('Invalid API response format')
    }

    return data.data
  } catch (error) {
    console.error('Error fetching OpenRouter models:', error)
    return []
  }
}

/**
 * Process raw OpenRouter model data into Prism format
 */
export function processModel(model: OpenRouterModel): ProcessedModel {
  // Extract provider from model ID (format: provider/model-name)
  const provider = model.id
    .split('/')[0]
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Parse pricing
  const inputPrice = parseFloat(model.pricing.prompt) * 1000000 // Convert to per 1M tokens
  const outputPrice = parseFloat(model.pricing.completion) * 1000000

  // Determine tier based on pricing
  const tier = determineTier(inputPrice, outputPrice)

  // Extract capabilities from description and modality
  const capabilities = extractCapabilities(model)

  // Extract modality
  const modality = extractModality(model)

  return {
    id: model.id,
    name: model.name || formatModelName(model.id),
    provider,
    description: model.description || 'No description available',
    tier,
    contextLength: model.context_length || 0,
    pricing: {
      input: inputPrice,
      output: outputPrice,
    },
    capabilities,
    releaseDate: estimateReleaseDate(model.id),
    popularity: calculatePopularity(model),
    popular: isPopularModel(model.id),
    modality,
  }
}

/**
 * Determine pricing tier
 */
function determineTier(
  inputPrice: number,
  outputPrice: number,
): 'free' | 'budget' | 'mid-tier' | 'premium' {
  const avgPrice = (inputPrice + outputPrice) / 2

  if (avgPrice === 0) return 'free'
  if (avgPrice < 0.5) return 'budget'
  if (avgPrice < 5) return 'mid-tier'
  return 'premium'
}

/**
 * Extract capabilities from model data
 */
function extractCapabilities(model: OpenRouterModel): string[] {
  const capabilities: string[] = ['chat']
  const desc = model.description?.toLowerCase() || ''
  const modality = model.architecture?.modality?.toLowerCase() || ''

  // Vision capability
  if (modality.includes('image') || desc.includes('vision') || desc.includes('multimodal')) {
    capabilities.push('vision')
  }

  // Code capability
  if (desc.includes('code') || desc.includes('coding') || desc.includes('programming')) {
    capabilities.push('code')
  }

  // Reasoning capability
  if (desc.includes('reasoning') || desc.includes('logic') || desc.includes('analysis')) {
    capabilities.push('reasoning')
  }

  // Image generation
  if (desc.includes('image generation') || desc.includes('dalle')) {
    capabilities.push('image-gen')
  }

  return [...new Set(capabilities)]
}

/**
 * Extract modality from model
 */
function extractModality(model: OpenRouterModel): string[] {
  const modalities: string[] = []
  const modality = model.architecture?.modality?.toLowerCase() || ''
  const desc = model.description?.toLowerCase() || ''

  if (modality.includes('text') || desc.includes('text')) modalities.push('text')
  if (modality.includes('image') || desc.includes('image')) modalities.push('image')
  if (modality.includes('audio') || desc.includes('audio')) modalities.push('audio')
  if (modality.includes('video') || desc.includes('video')) modalities.push('video')

  return modalities.length > 0 ? modalities : ['text']
}

/**
 * Format model name from ID
 */
function formatModelName(id: string): string {
  const parts = id.split('/')
  const modelName = parts[parts.length - 1]
  return modelName
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Estimate release date from model ID
 */
function estimateReleaseDate(id: string): string {
  const dateMatch = id.match(/(\d{4})-?(\d{2})?-?(\d{2})?/)
  if (dateMatch) {
    const [_, year, month = '01', day = '01'] = dateMatch
    return `${year}-${month}-${day}`
  }

  // Check for version numbers that might indicate dates
  if (id.includes('2025')) return '2025-01-15'
  if (id.includes('2024')) return '2024-06-01'
  if (id.includes('3.5') || id.includes('4.0')) return '2024-03-01'

  return '2023-12-01' // Default fallback
}

/**
 * Calculate popularity score
 */
function calculatePopularity(model: OpenRouterModel): number {
  let score = 50 // Base score

  // Free models are popular
  if (parseFloat(model.pricing.prompt) === 0) score += 20

  // Large context is attractive
  if (model.context_length >= 100000) score += 15
  if (model.context_length >= 500000) score += 10

  // Top providers get a boost
  if (model.top_provider) score += 10

  return Math.min(score, 100)
}

/**
 * Check if model is popular (manually curated list)
 */
function isPopularModel(id: string): boolean {
  const popularKeywords = [
    'gpt-4',
    'claude-3.5',
    'gemini-2',
    'llama-4',
    'mistral-large',
    'grok-2',
    'deepseek-v3',
  ]

  return popularKeywords.some((keyword) => id.toLowerCase().includes(keyword))
}

/**
 * Process all models
 */
export async function getAllProcessedModels(): Promise<ProcessedModel[]> {
  const rawModels = await fetchAllModels()
  return rawModels.map(processModel)
}

/**
 * Get models by tier
 */
export async function getModelsByTier(tier: string): Promise<ProcessedModel[]> {
  const allModels = await getAllProcessedModels()
  return allModels.filter((model) => model.tier === tier)
}

/**
 * Get free models
 */
export async function getFreeModels(): Promise<ProcessedModel[]> {
  return getModelsByTier('free')
}

/**
 * Get popular models
 */
export async function getPopularModels(): Promise<ProcessedModel[]> {
  const allModels = await getAllProcessedModels()
  return allModels.filter((model) => model.popular).slice(0, 20)
}

/**
 * Search models
 */
export async function searchModels(query: string): Promise<ProcessedModel[]> {
  const allModels = await getAllProcessedModels()
  const searchTerm = query.toLowerCase()

  return allModels.filter(
    (model) =>
      model.name.toLowerCase().includes(searchTerm) ||
      model.provider.toLowerCase().includes(searchTerm) ||
      model.description.toLowerCase().includes(searchTerm),
  )
}