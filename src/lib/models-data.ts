export type Tier = 'free' | 'budget' | 'mid-tier' | 'premium'

export interface Model {
  id: string
  name: string
  provider: string
  description: string
  tier: Tier
  contextLength: number
  pricing: { input: number; output: number }
  capabilities: string[]
  releaseDate: string
  popularity: number
  popular: boolean
}

export const MODELS_DATA: Model[] = [
  // FREE MODELS
  {
    id: 'meta-llama-4-maverick-free',
    name: 'Llama 4 Maverick',
    provider: 'Meta',
    description:
      'Advanced multimodal MoE model with 400B parameters, 17B active. Excellent for research and complex reasoning tasks.',
    tier: 'free',
    contextLength: 256000,
    pricing: { input: 0, output: 0 },
    capabilities: ['chat', 'vision', 'reasoning', 'code'],
    releaseDate: '2025-04-05',
    popularity: 95,
    popular: true,
  },
  {
    id: 'google-gemini-flash-15-free',
    name: 'Gemini 1.5 Flash',
    provider: 'Google',
    description: 'Fast and efficient multimodal model with excellent vision capabilities and 1M context.',
    tier: 'free',
    contextLength: 1000000,
    pricing: { input: 0, output: 0 },
    capabilities: ['chat', 'vision', 'reasoning', 'code'],
    releaseDate: '2025-02-20',
    popularity: 90,
    popular: true,
  },
  {
    id: 'mistral-small-32-24b-free',
    name: 'Mistral Small 3.2 24B',
    provider: 'Mistral',
    description: 'Compact yet powerful model with vision support and function calling.',
    tier: 'free',
    contextLength: 96000,
    pricing: { input: 0, output: 0 },
    capabilities: ['chat', 'vision', 'code'],
    releaseDate: '2025-03-10',
    popularity: 78,
    popular: false,
  },

  // BUDGET MODELS
  {
    id: 'meta-llama-31-8b',
    name: 'Llama 3.1 8B',
    provider: 'Meta',
    description: 'Efficient 8B parameter model, great for general tasks with low latency.',
    tier: 'budget',
    contextLength: 128000,
    pricing: { input: 0.1, output: 0.1 },
    capabilities: ['chat', 'code'],
    releaseDate: '2024-07-23',
    popularity: 85,
    popular: true,
  },
  {
    id: 'mistral-7b-instruct',
    name: 'Mistral 7B Instruct',
    provider: 'Mistral',
    description: 'Lightweight and fast, ideal for instruction following and creative writing.',
    tier: 'budget',
    contextLength: 32768,
    pricing: { input: 0.15, output: 0.15 },
    capabilities: ['chat', 'code'],
    releaseDate: '2024-09-24',
    popularity: 80,
    popular: true,
  },
  {
    id: 'google-gemma-2-9b',
    name: 'Gemma 2 9B',
    provider: 'Google',
    description: 'Open model with strong performance on reasoning and factual tasks.',
    tier: 'budget',
    contextLength: 8192,
    pricing: { input: 0.2, output: 0.2 },
    capabilities: ['chat', 'reasoning'],
    releaseDate: '2024-06-27',
    popularity: 72,
    popular: false,
  },

  // MID-TIER MODELS
  {
    id: 'openai-gpt-4o-mini',
    name: 'GPT-4o Mini',
    provider: 'OpenAI',
    description: 'Affordable GPT-4 class model with vision, fast and capable for most tasks.',
    tier: 'mid-tier',
    contextLength: 128000,
    pricing: { input: 0.15, output: 0.6 },
    capabilities: ['chat', 'vision', 'code', 'reasoning'],
    releaseDate: '2024-07-18',
    popularity: 92,
    popular: true,
  },
  {
    id: 'anthropic-claude-3-haiku',
    name: 'Claude 3 Haiku',
    provider: 'Anthropic',
    description: 'Fastest Claude model, great for high-throughput use cases with vision support.',
    tier: 'mid-tier',
    contextLength: 200000,
    pricing: { input: 0.25, output: 1.25 },
    capabilities: ['chat', 'vision', 'code', 'reasoning'],
    releaseDate: '2024-03-13',
    popularity: 88,
    popular: true,
  },
  {
    id: 'google-gemini-15-pro',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    description: 'Mid-tier multimodal model with excellent long context performance.',
    tier: 'mid-tier',
    contextLength: 2000000,
    pricing: { input: 1.25, output: 5.0 },
    capabilities: ['chat', 'vision', 'code', 'reasoning'],
    releaseDate: '2024-02-15',
    popularity: 86,
    popular: true,
  },

  // PREMIUM MODELS (subset)
  {
    id: 'openai-gpt-4-turbo',
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Premium GPT-4 class model for complex tasks and reasoning at scale.',
    tier: 'premium',
    contextLength: 128000,
    pricing: { input: 10.0, output: 30.0 },
    capabilities: ['chat', 'vision', 'code', 'reasoning'],
    releaseDate: '2024-02-01',
    popularity: 95,
    popular: true,
  },
]