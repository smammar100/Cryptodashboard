import { motion } from "framer-motion"
import { suggestedArticles } from "@/data/mock-data"

interface SuggestedArticlesProps {
  reduceMotion?: boolean
}

export function SuggestedArticles({ reduceMotion }: SuggestedArticlesProps) {
  return (
    <motion.div
      className="flex w-full flex-1 flex-col gap-4 rounded-2xl border-0 bg-white p-6 shadow-sm"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h2 className="text-lg font-semibold text-zinc-900">Suggested For You</h2>
      <div className="flex flex-col gap-4">
        {suggestedArticles.map((article, i) => (
          <motion.article
            key={article.title}
            className="flex cursor-pointer flex-col gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.22 + i * 0.08 }}
            whileHover={reduceMotion ? undefined : { x: 4, transition: { duration: 0.2 } }}
          >
            <div className="flex h-[180px] w-full shrink-0 overflow-hidden rounded-2xl bg-zinc-100 sm:h-[164px] sm:w-[254px]">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-sm text-zinc-600">{article.category}</span>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {article.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  )
}
