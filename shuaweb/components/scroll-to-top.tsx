"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-white/80 backdrop-blur-sm border-amber-500/30 shadow-lg transition-opacity duration-300 hover:bg-white hover:border-amber-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="h-5 w-5 text-amber-500" />
      <span className="sr-only">Volver arriba</span>
    </Button>
  )
}

