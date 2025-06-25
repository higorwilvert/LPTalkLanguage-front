"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import HowItWorks from "@/components/howItWorks"
import Languages from "@/components/languages"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal")

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (rect.top <= windowHeight * 0.85) {
          el.classList.add("fade-in-up")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() 

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Languages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
