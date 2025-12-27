"use client"

import React, { useState } from "react"

export type Action = {
  id: string
  label: string
  icon?: React.ReactNode
  description?: string
  short?: string
  end?: string
}

export function ActionSearchBar({
  actions = [],
  onQueryChange,
  onSelectAction,
}: {
  actions?: Action[]
  onQueryChange?: (q: string) => void
  onSelectAction?: (action: Action) => void
}) {
  const [query, setQuery] = useState("")

  const filtered = query
    ? actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()))
    : actions

  return (
    <div className="relative">
      <input
        value={query}
        onChange={(e) => {
          const q = e.target.value
          setQuery(q)
          onQueryChange?.(q)
        }}
        placeholder="Search models"
        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder:text-white/40"
      />
      {filtered.length > 0 && query && (
        <div className="absolute left-0 right-0 mt-2 bg-black border border-white/10 rounded-md shadow-lg max-h-64 overflow-auto z-50">
          {filtered.map((a) => (
            <button
              key={a.id}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10"
              onClick={() => onSelectAction?.(a)}
            >
              {a.icon}
              <span className="flex-1">{a.label}</span>
              {a.short && <span className="text-white/50">{a.short}</span>}
              {a.end && <span className="text-white/70">{a.end}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}