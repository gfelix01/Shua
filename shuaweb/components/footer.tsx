import Image from "next/image"
import Link from "next/link"
import { Instagram, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Shua Makeup Logo"
                width={200}
                height={200}
                className="h-24 w-auto mix-blend-screen"
              />
            </div>
            <p className="text-gray-400">
              Tu destino de belleza y cuidado personal. Ofrecemos servicios profesionales para realzar tu belleza
              natural.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href="https://instagram.com/shuamakeupstudio"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#extensiones" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Extensiones de Cabello
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400">Av. Santa Rosa esquina Altagracia, Plaza Maureen</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400">829-641-8720</span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400">@shuamakeupstudio</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shua Makeup & Beauty. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

