"use client"

import type { ImageLoaderProps } from "next/image"

// Static export has no image optimization server, so let Unsplash's CDN
// resize instead: it honours the `w` and `q` query parameters.
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (!src.startsWith("https://images.unsplash.com/")) return src
  const url = new URL(src)
  url.searchParams.set("w", String(width))
  url.searchParams.set("q", String(quality ?? 75))
  return url.href
}
