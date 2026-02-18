import { motion } from "framer-motion"
import { TrendingUp, LineChart, DollarSign, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { balanceData } from "@/data/mock-data"

const SparklineSvg = () => (
  <svg
    width="76"
    height="24"
    viewBox="0 0 76 24"
    fill="none"
    className="shrink-0"
    aria-hidden
  >
    <path
      d="M0 20 L8 16 L16 18 L24 12 L32 14 L40 8 L48 10 L56 6 L64 8 L72 4 L76 4"
      stroke="#E25706"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

interface BalanceCardProps {
  reduceMotion?: boolean
}

export function BalanceCard({ reduceMotion }: BalanceCardProps) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
    <Card className="w-full gap-4 rounded-2xl border-0 py-4 shadow-sm sm:gap-6 sm:py-6">
      <CardHeader className="flex flex-row items-center justify-between px-4 pb-3 sm:px-6 sm:pb-4">
        <h2 className="text-lg font-semibold text-zinc-900">My Balance</h2>
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-xl border-zinc-300"
          aria-label="More options"
        >
          <MoreHorizontal className="size-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 sm:gap-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-3xl font-semibold tracking-tight text-zinc-900">
              {balanceData.total}
            </span>
            <Badge
              variant="secondary"
              className="gap-1 rounded-2xl border-0 bg-[#EDFEED] px-2.5 py-0.5 text-xs font-normal text-[#1A981B]"
            >
              <TrendingUp className="size-4" />
              {balanceData.change}
            </Badge>
            <span className="text-sm text-zinc-600">
              {balanceData.changeLabel}
            </span>
          </div>
          <div className="hidden sm:block">
            <SparklineSvg />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:gap-4 lg:items-stretch">
          {balanceData.crypto.map((row, i) => (
            <div key={row.name} className="flex flex-col lg:min-w-0 lg:flex-1">
              {i > 0 && <div className="mb-2 h-px w-full shrink-0 bg-zinc-200 sm:mb-3 lg:mb-0 lg:ms-0 lg:h-auto lg:min-h-0 lg:w-px lg:self-stretch" />}
              <div className="flex flex-col flex-nowrap items-start justify-start gap-4">
                <div className="flex shrink-0 items-center gap-2 pb-2">
                  <div className="flex size-10 items-center justify-center rounded-full bg-zinc-100">
                    {row.name === "Crypto" ? (
                      <LineChart className="size-5 text-zinc-600" />
                    ) : (
                      <DollarSign className="size-5 text-zinc-600" />
                    )}
                  </div>
                  <span className="text-base font-semibold text-zinc-900">
                    {row.name}
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-1 items-center justify-between gap-0">
                  <div className="flex h-fit flex-wrap items-start justify-start gap-x-4 gap-y-2 sm:flex-nowrap">
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-sm text-zinc-600">Balance</span>
                      <span className="block text-sm font-medium text-zinc-900">
                        {row.balance}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-col gap-1">
                      <span className="text-sm text-zinc-600">{row.type}</span>
                      <button
                        type="button"
                        className="block cursor-pointer text-left text-sm text-[#1FB620] hover:underline"
                      >
                        Earn up to {row.apy} APY
                      </button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-10 shrink-0 rounded-xl"
                    aria-label="View more"
                  >
                    <ChevronRight className="size-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </motion.div>
  )
}
