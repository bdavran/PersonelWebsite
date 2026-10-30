import type { Lang } from "@/lib/content/types"

// Path of each language's home page, relative to the basePath. Kept apart from
// the translations so client components can import it without bundling them.
export const langPaths: Record<Lang, string> = { tr: "/", en: "/en/" }
