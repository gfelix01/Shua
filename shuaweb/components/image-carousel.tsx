"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl">
      {/* Main Image */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className={cn(
                "object-cover transition-transform duration-700 ease-in-out",
                isLoaded && index === currentIndex ? "scale-100" : "scale-110"
              )}
              priority
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full h-14 w-14 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full h-14 w-14 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              index === currentIndex ? "w-10 bg-white shadow-lg" : "bg-white/50"
            )}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}