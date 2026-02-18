import { useState, useEffect } from "react"

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const

export type Breakpoint = "sm" | "md" | "lg" | "xl"

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm")

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= BREAKPOINTS.xl) setBreakpoint("xl")
      else if (w >= BREAKPOINTS.lg) setBreakpoint("lg")
      else if (w >= BREAKPOINTS.md) setBreakpoint("md")
      else if (w >= BREAKPOINTS.sm) setBreakpoint("sm")
      else setBreakpoint("sm")
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return breakpoint
}
