import { getCryptoLogoUrl } from "@/lib/crypto-logos"
import { cn } from "@/lib/utils"

interface CryptoLogoProps {
  symbol: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "size-8",
  md: "size-10",
  lg: "size-12",
}

export function CryptoLogo({ symbol, size = "md", className }: CryptoLogoProps) {
  const logoUrl = getCryptoLogoUrl(symbol)
  const sizeClass = sizeClasses[size]

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${symbol} logo`}
        className={cn("shrink-0 rounded-full object-cover", sizeClass, className)}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-700",
        sizeClass,
        className
      )}
      aria-hidden
    >
      {symbol[0]}
    </div>
  )
}
