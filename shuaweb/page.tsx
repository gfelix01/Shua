import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { ServicesCarousel } from "@/components/services-carousel"
import { HairSection } from "@/components/hair-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Datos de ejemplo para el carrusel de imágenes
const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2020.03.16_89ef1953.jpg-6ZDuKGSoeai9rPZLlbWz5BsCOWUJxm.jpeg",
    alt: "Shua Makeup & Beauty Banner 1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2020.03.16_f78b7fd8.jpg-Tl4h8qDPnJtvXlco6RhmsvsOgxXQat.jpeg",
    alt: "Shua Makeup & Beauty Banner 2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2020.03.15_be69efd0.jpg-hbYkbQagYaaXckLgh4tV1B54d7SwrN.jpeg",
    alt: "Shua Makeup & Beauty Banner 3",
  },
]

// Datos de servicios
const services = [
  {
    title: "Pestañas 2D y 3D",
    description: "Extensiones de pestañas para una mirada más intensa",
    icon: "👁️",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg",
    items: ["Pestañas 2D", "Pestañas 3D", "Extensiones de volumen", "Remoción segura", "Mantenimiento"],
  },
  {
    title: "Diseño de Cejas",
    description: "Diseño profesional para realzar tu mirada",
    icon: "✨",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg",
    items: ["Diseño personalizado", "Depilación con hilo", "Microblading", "Laminado de cejas", "Tinte de cejas"],
  },
  {
    title: "Maquillaje",
    description: "Maquillaje profesional para toda ocasión",
    icon: "💄",
    items: [
      "Maquillaje social",
      "Maquillaje de novia",
      "Maquillaje para eventos",
      "Clases personalizadas",
      "Automaquillaje",
    ],
  },
]

export default function ShuaMakeup() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50 shadow-soft">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2010.49.45_084bda5f.jpg-NC9x7MsOUHhh8ethUurUVzWdO9QEJY.jpeg"
                alt="Shua Makeup Logo"
                width={180}
                height={180}
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <Link
                  href="#servicios"
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Servicios
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="#galeria"
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Galería
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="#contacto"
                  className="text-neutral-800 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  Contacto
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Button className="btn-primary">Reservar Cita</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] md:h-[600px] mt-20">
        <ImageCarousel images={carouselImages} />
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
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

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-on-scroll">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              En Shua Makeup & Beauty ofrecemos servicios profesionales para realzar tu belleza natural. Nuestro equipo
              de expertos está listo para atenderte con los mejores productos y técnicas.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg"
              alt="Servicios Disponibles"
              width={800}
              height={800}
              className="mx-auto mb-12 rounded-xl shadow-soft hover:shadow-hover transition-all duration-300"
            />
          </div>

          <div className="animate-on-scroll">
            <ServicesCarousel services={services} />
          </div>
        </div>
      </section>

      {/* Hair Section */}
      <HairSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

