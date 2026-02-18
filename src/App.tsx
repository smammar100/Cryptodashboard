import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpDown, ArrowDownLeft, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { BalanceCard } from "@/components/dashboard/BalanceCard"
import { PricesTable } from "@/components/dashboard/PricesTable"
import { TopMovers } from "@/components/dashboard/TopMovers"
import { SuggestedArticles } from "@/components/dashboard/SuggestedArticles"

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.03 * i },
  }),
}

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }
  const heroInitial = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
  const columnVariants = reduceMotion ? undefined : { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <header className="sticky top-0 z-50">
        <Navbar reduceMotion={!!reduceMotion} />
      </header>
      <main className="px-4 py-4 sm:px-6 md:px-8">
        <motion.div
          className="mb-3 flex flex-col gap-3 sm:mb-4 md:flex-row md:items-center md:justify-between"
          initial={heroInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Welcome, Ammar
            </h1>
            <p className="text-sm text-zinc-600">
              Here's the daily stats breakdown!
            </p>
          </div>
          <div className="hidden md:flex md:flex-nowrap md:items-center md:gap-2">
            <Button className="h-10 gap-2 px-3 bg-[#E25706] text-white hover:bg-[#BA420D] sm:px-4">
              <ArrowUpDown className="size-4" />
              <span className="hidden sm:inline">Transactions</span>
            </Button>
            <Button variant="outline" className="h-10 gap-2 border-zinc-300 px-3 sm:px-4">
              <ArrowDownLeft className="size-4" />
              <span className="hidden sm:inline">Receive Crypto</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-xl border-zinc-300"
              aria-label="Apps"
            >
              <LayoutGrid className="size-5" />
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-4 lg:flex-row"
          variants={columnVariants ? container : undefined}
          initial={columnVariants ? "hidden" : false}
          animate={columnVariants ? "visible" : false}
        >
          <motion.div
            className="flex flex-col gap-3 lg:w-1/2 xl:w-[677px]"
            variants={columnVariants ? fadeUp : undefined}
          >
            <BalanceCard reduceMotion={!!reduceMotion} />
            <PricesTable reduceMotion={!!reduceMotion} />
          </motion.div>
          <motion.div
            className="flex flex-1 flex-col gap-3"
            variants={columnVariants ? fadeUp : undefined}
          >
            <TopMovers reduceMotion={!!reduceMotion} />
            <SuggestedArticles reduceMotion={!!reduceMotion} />
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

export default App
