"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface Service {
  title: string
  description: string
  icon: string
  image?: string
  items: string[]
}

interface ServicesCarouselProps {
  services: Service[]
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextService = () => {
    setActiveIndex((current) => (current + 1) % services.length)
  }

  const prevService = () => {
    setActiveIndex((current) => (current - 1 + services.length) % services.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden py-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {services.map((service, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.01] overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-600/20 to-amber-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{service.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 text-center">
                      <Badge variant="default" className="mb-2">
                        {service.title}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto mb-4"></div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="mr-2 text-amber-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md",
          activeIndex === 0 && "opacity-50 cursor-not-allowed",
        )}
        onClick={prevService}
        disabled={activeIndex === 0}
      >
        <ChevronLeft className="h-6 w-6 text-amber-500" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md",
          activeIndex === services.length - 1 && "opacity-50 cursor-not-allowed",
        )}
        onClick={nextService}
        disabled={activeIndex === services.length - 1}
      >
        <ChevronRight className="h-6 w-6 text-amber-500" />
      </Button>

      {/* Indicators */}
      <div className="mt-6 flex justify-center space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-amber-500" : "w-2 bg-gray-300"
              }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

