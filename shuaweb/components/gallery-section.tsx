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
    <section id="galeria" className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {!showFullContent && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Galería de Trabajos</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Explora algunos de nuestros mejores trabajos y descubre por qué somos el destino preferido para servicios
              de belleza.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: previewCount }).map((_, item) => (
            <div key={item} className="relative aspect-square group overflow-hidden rounded-xl shadow-lg">
              <Image
                src={`/images/gallery${(item % 8) + 1}.jpg`}
                alt={`Trabajo ${item + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white w-full">
                  <h3 className="font-semibold text-lg">Servicio Profesional</h3>
                  <p className="text-sm opacity-80">Shua Makeup & Beauty</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showFullContent && (
          <div className="text-center mt-12">
            <Link href="/galeria">
              <Button className="bg-gradient-to-r from-purple-700 to-pink-500 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                Ver galería completa
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
