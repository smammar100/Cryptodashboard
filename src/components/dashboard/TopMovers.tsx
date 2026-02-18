import { useMemo } from "react"
import { motion } from "framer-motion"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CryptoLogo } from "@/components/ui/crypto-logo"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { topMoversData } from "@/data/mock-data"

const CARDS_BY_BREAKPOINT = { sm: 3, md: 3, lg: 4, xl: 5 } as const

interface TopMoversProps {
  reduceMotion?: boolean
}

export function TopMovers({ reduceMotion }: TopMoversProps) {
  const breakpoint = useBreakpoint()
  const cardCount = CARDS_BY_BREAKPOINT[breakpoint]
  const visibleMovers = useMemo(
    () => topMoversData.slice(0, cardCount),
    [cardCount]
  )

  return (
    <motion.div
      className="w-full rounded-2xl border-0 bg-white p-6 shadow-sm"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">Top Movers</h2>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-xl"
            aria-label="Previous"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-xl"
            aria-label="Next"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4 xl:grid-cols-5">
        {visibleMovers.map((mover, i) => (
          <motion.div
            key={`${mover.symbol}-${i}`}
            className="flex min-w-[173px] flex-1 flex-col gap-6 rounded-xl bg-zinc-50 p-4 md:min-w-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3, delay: 0.16 + i * 0.05 }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center justify-between">
              <CryptoLogo symbol={mover.symbol} size="md" />
              <Badge
                variant="secondary"
                className="gap-1 rounded-2xl border-0 bg-[#EDFEED] px-2.5 py-0.5 text-xs font-normal text-[#1FB620]"
              >
                <TrendingUp className="size-4" />
                {mover.change}
              </Badge>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium text-zinc-900">
                {mover.symbol}
              </span>
              <span className="text-lg font-semibold tracking-tight text-zinc-900">
                {mover.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
