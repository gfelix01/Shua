import Image from "next/image"
import Link from "next/link"
import { Instagram, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageCarousel } from "@/components/image-carousel"
import { ServicesCarousel } from "@/components/services-carousel"
import { HairSection } from "@/components/hair-section"

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
      <nav className="border-b fixed w-full top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
              <div className="ml-10 flex items-center space-x-4">
                <Link href="#servicios" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Servicios
                </Link>
                <Link href="#galeria" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Galería
                </Link>
                <Link href="#contacto" className="text-gray-700 hover:text-amber-500 transition-colors">
                  Contacto
                </Link>
                <Button className="bg-amber-500 hover:bg-amber-600 text-white transition-opacity">Reservar Cita</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative h-[400px] mt-16">
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Servicios%20.jpg-uz3KsZwCOPkyFpS2ErJQmxfFG0HFZA.jpeg"
            alt="Servicios Disponibles"
            width={800}
            height={800}
            className="mx-auto mb-12 rounded-lg shadow-lg"
          />
          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Hair Section */}
      <HairSection />

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <MapPin className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>Av. Santa Rosa esquina Altagracia, Plaza Maureen</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Phone className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>829-641-8720</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <Instagram className="h-6 w-6 text-amber-500 group-hover:scale-110 transition-transform" />
                <span>@shuamakeupstudio</span>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full p-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white transition-opacity">
                Enviar Mensaje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-23%20a%20las%2010.49.45_084bda5f.jpg-NC9x7MsOUHhh8ethUurUVzWdO9QEJY.jpeg"
                  alt="Shua Makeup Logo"
                  width={200}
                  height={200}
                  className="h-24 w-auto mix-blend-screen"
                />
              </div>
              <p className="text-gray-400">Tu destino de belleza y cuidado personal</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horario</h4>
              <p className="text-gray-400">Lunes - Viernes: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-400">Sábado: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-400">Domingo: Cerrado</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/shuamakeupstudio"
                  target="_blank"
                  className="text-gray-400 hover:text-amber-500 transition-colors transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shua Makeup. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

