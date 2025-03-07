import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shua Makeup & Beauty",
  description:
    "Tu destino de belleza y cuidado personal. Ofrecemos servicios profesionales para realzar tu belleza natural.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <main className="min-h-screen bg-white pt-16">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  )
}

