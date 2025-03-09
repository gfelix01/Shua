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
    <section className="relative w-full overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-[95%] xl:max-w-[1400px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <ImageCarousel images={carouselImages} />
      </div>
    </section>
  )
}