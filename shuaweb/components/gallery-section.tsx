import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface GallerySectionProps {
  showFullContent?: boolean
}

export function GallerySection({ showFullContent = false }: GallerySectionProps) {
  // Número de imágenes a mostrar en la versión resumida
  const previewCount = showFullContent ? 12 : 8

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!showFullContent && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Galería de Trabajos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-[#ff1493] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora algunos de nuestros mejores trabajos y descubre por qué somos el destino preferido para servicios
              de belleza.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: previewCount }).map((_, item) => (
            <div key={item} className="relative aspect-square group overflow-hidden rounded-lg shadow-md">
              <Image
                src={`/images/gallery${(item % 8) + 1}.jpg`}
                alt={`Trabajo ${item + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white w-full">
                  <h3 className="font-medium text-sm md:text-base">Servicio Profesional</h3>
                  <p className="text-xs md:text-sm opacity-80">Shua Makeup & Beauty</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showFullContent && (
          <div className="text-center mt-12">
            <Link href="/galeria">
              <Button className="bg-gradient-to-r from-purple-600 to-[#ff1493] text-white hover:opacity-90 transition-opacity shadow-md">
                Ver galería completa
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

