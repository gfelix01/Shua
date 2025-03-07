import { ImageCarousel } from "@/components/image-carousel"

// Datos de ejemplo para el carrusel de imágenes
const carouselImages = [
  {
    src: "/images/banner1.jpg",
    alt: "Shua Makeup & Beauty Banner 1",
  },
  {
    src: "/images/banner2.jpg",
    alt: "Shua Makeup & Beauty Banner 2",
  },
  {
    src: "/images/banner3.jpg",
    alt: "Shua Makeup & Beauty Banner 3",
  },
]

export function HeroSection() {
  return (
    <section className="relative h-[400px]">
      <ImageCarousel images={carouselImages} />
    </section>
  )
}

