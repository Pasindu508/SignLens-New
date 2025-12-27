"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const scrollAreaVariants = cva("relative overflow-hidden", {
  variants: {
    orientation: {
      vertical: "h-full",
      horizontal: "w-full",
      both: "h-full w-full",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

const scrollBarVariants = cva("flex touch-none select-none transition-colors", {
  variants: {
    orientation: {
      vertical: "h-full w-2.5 border-l border-l-transparent p-[1px]",
      horizontal: "h-2.5 w-full border-t border-t-transparent p-[1px]",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollAreaVariants> {
  scrollHideDelay?: number
  type?: "auto" | "always" | "scroll" | "hover"
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, orientation = "vertical", type = "auto", scrollHideDelay = 600, children, ...props }, ref) => {
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      type={type}
      scrollHideDelay={scrollHideDelay}
      className={cn(scrollAreaVariants({ orientation }), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>

      {/* Vertical scrollbar */}
      {orientation !== "horizontal" && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className={cn(scrollBarVariants({ orientation: "vertical" }))}
        >
          <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      {/* Horizontal scrollbar */}
      {orientation !== "vertical" && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className={cn(scrollBarVariants({ orientation: "horizontal" }))}
        >
          <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }