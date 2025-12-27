"use client"

import React from "react"
import type { ProcessedModel } from "@/lib/openrouter-api"
import {
  OpenAI,
  Anthropic,
  Google,
  Mistral,
  Meta,
  Cohere,
  Groq,
  Perplexity,
  DeepSeek,
  Replicate,
  HuggingFace,
  OpenRouter,
  XAI,
  Qwen,
  Stability,
  Together,
  Voyage,
  WorkersAI,
  Bedrock,
  Fireworks,
  Upstage,
  Zhipu,
  ZeroOne,
  VertexAI,
  Yandex,
  Wenxin,
  Yi,
  Ollama,
  Midjourney,
  Cerebras,
  AzureAI,
  Nvidia,
  Microsoft,
  Minimax,
  Moonshot,
  IBM,
  ByteDance,
  Baidu,
  Alibaba,
  Tencent,
  ZAI,
} from "@lobehub/icons"

interface ProviderIconProps {
  model: ProcessedModel
  size?: number
}

export function ProviderIcon({ model, size = 20 }: ProviderIconProps) {
  const key = model.provider.toLowerCase().replace(/[^a-z0-9]/g, "")

  const render = () => {
    switch (key) {
      case "openai":
        return <OpenAI style={{ height: size }} />
      case "anthropic":
        return <Anthropic style={{ height: size }} />
      case "google":
        return <Google.Color style={{ height: size }} />
      case "mistral":
      case "mistralai":
        return <Mistral.Color style={{ height: size }} />
      case "meta":
        return <Meta.Color style={{ height: size }} />
      case "cohere":
        return <Cohere.Color style={{ height: size }} />
      case "groq":
        return <Groq style={{ height: size }} />
      case "perplexity":
        return <Perplexity.Color style={{ height: size }} />
      case "deepseek":
        return <DeepSeek.Color style={{ height: size }} />
      case "replicate":
        return <Replicate style={{ height: size }} />
      case "huggingface":
        return <HuggingFace.Color style={{ height: size }} />
      case "openrouter":
        return <OpenRouter style={{ height: size }} />
      case "xai":
        return <XAI style={{ height: size }} />
      case "qwen":
        return <Qwen.Color style={{ height: size }} />
      case "stability":
        return <Stability.Color style={{ height: size }} />
      case "together":
        return <Together.Color style={{ height: size }} />
      case "voyage":
        return <Voyage.Color style={{ height: size }} />
      case "workersai":
      case "cloudflare":
        return <WorkersAI.Color style={{ height: size }} />
      case "bedrock":
        return <Bedrock.Color style={{ height: size }} />
      case "fireworks":
        return <Fireworks.Color style={{ height: size }} />
      case "upstage":
        return <Upstage.Color style={{ height: size }} />
      case "zhipu":
        return <Zhipu style={{ height: size }} />
      case "zeroone":
        return <ZeroOne style={{ height: size }} />
      case "vertexai":
        return <VertexAI.Color style={{ height: size }} />
      case "yandex":
        return <Yandex style={{ height: size }} />
      case "wenxin":
        return <Wenxin style={{ height: size }} />
      case "yi":
        return <Yi style={{ height: size }} />
      case "metallama":
        return <Meta.Color style={{ height: size }} />
      case "ollama":
        return <Ollama style={{ height: size }} />
      case "midjourney":
        return <Midjourney style={{ height: size }} />
      case "cerebras":
        return <Cerebras.Color style={{ height: size }} />
      case "azureai":
      case "azure":
        return <AzureAI.Color style={{ height: size }} />
      case "nvidia":
        return <Nvidia.Color style={{ height: size }} />
      case "microsoft":
        return <Microsoft.Color style={{ height: size }} />
      case "minimax":
        return <Minimax.Color style={{ height: size }} />
      case "moonshot":
      case "moonshotai":
        return <Moonshot style={{ height: size }} />
      case "ibm":
        return <IBM style={{ height: size }} />
      case "bytedance":
        return <ByteDance.Color style={{ height: size }} />
      case "baidu":
        return <Baidu.Color style={{ height: size }} />
      case "alibaba":
        return <Alibaba.Color style={{ height: size }} />
      case "tencent":
        return <Tencent.Color style={{ height: size }} />
      case "zai":
        return <ZAI style={{ height: size }} />
        default:
          return (
            <span
              className="inline-flex items-center justify-center text-white/80"
              style={{ height: size, fontSize: Math.max(12, Math.floor(size * 0.6)), lineHeight: 1 }}
            >
              {model.provider}
            </span>
          )
      }
  }

  return <div className="inline-flex items-center">{render()}</div>
}