import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Talk Language",
  keywords: ["idiomas", "aprendizado", "cursos", "linguagens", "educação"],
  authors: [{ name: "Talk Language", url: "https://talklanguage.com.br" }],
  creator: "Talk Language",
  description:
    "Talk Language - Aprenda idiomas de forma fácil e divertida. Cursos online com professores nativos, material didático completo e suporte 24/7.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-[#141E33] text-white antialiased`}>{children}</body>
    </html>
  )
}
