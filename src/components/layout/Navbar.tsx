import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", active: true },
  { label: "My Assets", active: false },
  { label: "Transactions", active: false },
  { label: "Rewards", active: false },
  { label: "News", active: false },
] as const

interface NavbarProps {
  reduceMotion?: boolean
}

export function Navbar({ reduceMotion }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.div
      className="relative bg-white"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="flex h-[72px] w-full items-center justify-between px-4 py-4 sm:px-6 md:px-8">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex shrink-0 items-center gap-2">
          <img
            src="/assets/mirana-logo.png"
            alt="Mirana"
            className="h-7 w-auto"
            width={88}
            height={28}
          />
        </div>
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className={cn(
                "cursor-pointer transition-colors hover:text-zinc-900",
                link.active ? "text-[#E25706]" : "text-zinc-500"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-xl border-zinc-300"
          aria-label="Search"
        >
          <Search className="size-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-xl border-zinc-300"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
        </Button>
        <div
          className="flex size-10 items-center justify-center rounded-full bg-[#F8F5FF] text-lg font-semibold text-[#7A4DF5]"
          aria-hidden
        >
          K
        </div>
        <Button
          variant="outline"
          size="icon"
          className="size-10 rounded-xl border-zinc-300 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
      </nav>
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-[72px] z-40 border-t border-zinc-200 bg-white px-4 py-3 shadow-sm md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={`mobile-${link.label}`}
                type="button"
                className={cn(
                  "rounded-md px-2 py-2 text-left text-sm font-medium transition-colors hover:bg-zinc-100",
                  link.active ? "text-[#E25706]" : "text-zinc-600"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
