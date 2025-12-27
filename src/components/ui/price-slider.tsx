"use client";
import * as RadixSlider from "@radix-ui/react-slider";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { ElementRef, useRef, useState } from "react";

const MAX_OVERFLOW = 50;

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function Slider({ value, onChange }: SliderProps) {
  let [region, setRegion] = useState("middle");
  let clientX = useMotionValue(0);
  let overflow = useMotionValue(0);
  let scale = useMotionValue(1);
  let ref = useRef<ElementRef<typeof RadixSlider.Root>>(null);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      let { left, right } = ref.current.getBoundingClientRect();
      let newValue;

      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  return (
    <motion.div
      data-cursor-hide
      onHoverStart={() => animate(scale, 1.2)}
      onHoverEnd={() => animate(scale, 1)}
      onTouchStart={() => animate(scale, 1.2)}
      onTouchEnd={() => animate(scale, 1)}
      style={{
        scale,
        opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
      }}
      className="flex w-full touch-none select-none items-center justify-center"
    >
      <RadixSlider.Root
        ref={ref}
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        step={0.01}
        className="relative flex w-full min-w-[200px] grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
        onPointerMove={(e) => {
          if (e.buttons > 0) {
            clientX.jump(e.clientX);
          }
        }}
        onLostPointerCapture={() => {
          animate(overflow, 0, { type: "spring", bounce: 0.5 });
        }}
      >
        <motion.div
          style={{
            scaleX: useTransform(() => {
              if (ref.current) {
                let { width } = ref.current.getBoundingClientRect();

                return 1 + overflow.get() / width;
              }
              return 1;
            }),
            scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
            transformOrigin: useTransform(() => {
              if (ref.current) {
                let { left, width } = ref.current.getBoundingClientRect();

                return clientX.get() < left + width / 2 ? "right" : "left";
              }
              return "center" as any;
            }),
            height: useTransform(scale, [1, 1.2], [6, 12]),
            marginTop: useTransform(scale, [1, 1.2], [0, -3]),
            marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
          }}
          className="flex grow"
        >
          <RadixSlider.Track className="relative isolate h-full grow overflow-hidden rounded-full bg-muted">
            <RadixSlider.Range className="absolute h-full bg-foreground" />
          </RadixSlider.Track>
        </motion.div>
        <RadixSlider.Thumb />
      </RadixSlider.Root>
    </motion.div>
  );
}

export default Slider;

// Sigmoid-based decay function
function decay(value: number, max: number) {
  if (max === 0) {
    return 0;
  }

  let entry = value / max;
  let sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}