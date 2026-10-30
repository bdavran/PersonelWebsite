import { Geist, Geist_Mono } from "next/font/google";

// Shared by the Turkish and English root layouts.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
