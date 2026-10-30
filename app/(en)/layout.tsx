import "../globals.css";
import { fontVariables } from "../fonts";
import { getMetadata } from "@/lib/content";

export const metadata = getMetadata("en");

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontVariables} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
