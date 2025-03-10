import { VideoHero } from "@/components/video-hero"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] mt-20">
      <VideoHero
        videoSrc="/videos/makeup-hero-2.mp4"
        posterSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2020.03.16_89ef1953.jpg-6ZDuKGSoeai9rPZLlbWz5BsCOWUJxm.jpeg"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 tracking-tight">
            Belleza que Transforma
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Descubre servicios profesionales que realzan tu belleza natural
          </p>
          <Button className="btn-primary text-base px-8 py-3">
            Descubrir Servicios <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

