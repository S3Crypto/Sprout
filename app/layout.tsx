import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Footerdemo } from "@/components/ui/footer-section"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Sprout - Grow your Flow",
  description: "A mindful productivity companion for developers that grows as you focus.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Footerdemo />
        </ThemeProvider>
      </body>
    </html>
  )
}