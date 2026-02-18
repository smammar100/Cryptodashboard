import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CryptoLogo } from "@/components/ui/crypto-logo"
import { pricesData } from "@/data/mock-data"

const SparklineSvg = ({ positive }: { positive: boolean }) => (
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
      stroke={positive ? "#E25706" : "#7A4DF5"}
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

interface PricesTableProps {
  reduceMotion?: boolean
}

export function PricesTable({ reduceMotion }: PricesTableProps) {
  return (
    <motion.div
      className="w-full rounded-2xl border-0 bg-white p-4 shadow-sm sm:p-6"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">Prices</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue="watchlist">
            <SelectTrigger className="h-10 w-[115px] rounded-lg border-zinc-300">
              <SelectValue placeholder="Watchlist" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="watchlist">Watchlist</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            className="size-10 rounded-xl border-zinc-300"
            aria-label="More options"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
      </div>
      <Table>
        <TableBody>
          {pricesData.map((row) => (
            <TableRow key={row.symbol} className="border-0">
              <TableCell className="flex items-center gap-3 py-2.5 sm:py-3">
                <CryptoLogo symbol={row.symbol} size="sm" />
                <div>
                  <div className="text-base font-semibold text-zinc-900">
                    {row.name}
                  </div>
                  <div className="text-xs text-zinc-500">{row.symbol}</div>
                </div>
              </TableCell>
              <TableCell className="py-2.5 text-sm font-medium text-zinc-900 sm:py-3">
                {row.price}
              </TableCell>
              <TableCell className="hidden py-3 md:table-cell">
                <SparklineSvg positive={row.positive} />
              </TableCell>
              <TableCell className="hidden py-2.5 sm:table-cell sm:py-3">
                <Badge
                  variant="secondary"
                  className={`rounded-2xl border-0 px-2.5 py-0.5 text-xs font-normal ${
                    row.positive
                      ? "bg-[#EDFEED] text-[#1A981B]"
                      : "bg-[#FCE8EC] text-[#B21634]"
                  }`}
                >
                  {row.positive ? "↑" : "↓"} {row.change}
                </Badge>
              </TableCell>
              <TableCell className="py-2.5 text-right sm:py-3">
                <div className="flex items-center justify-end gap-3">
                  <Button
                    size="sm"
                    className="h-8 rounded-md bg-[#E25706] px-3 text-[11px] text-white hover:bg-[#BA420D] sm:px-4 sm:text-xs"
                  >
                    Buy
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hidden size-8 rounded-xl border-zinc-300 sm:inline-flex"
                    aria-label="More options"
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-sm text-zinc-600">Shows row per page</span>
          <Select defaultValue="4">
            <SelectTrigger className="h-8 w-16 rounded-md border-zinc-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="12">12</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-sm text-zinc-900">
            <span className="text-zinc-500">1</span>/4
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-xl"
            aria-label="Previous page"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-xl"
            aria-label="Next page"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
