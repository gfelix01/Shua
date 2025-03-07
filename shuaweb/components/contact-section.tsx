import { Instagram, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-[#ff1493]/10 transition-colors">
                  <MapPin className="h-5 w-5 text-[#ff1493]" />
                </div>
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-gray-600">Av. Santa Rosa esquina Altagracia, Plaza Maureen</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-[#ff1493]/10 transition-colors">
                  <Phone className="h-5 w-5 text-[#ff1493]" />
                </div>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-gray-600">829-641-8720</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-[#ff1493]/10 transition-colors">
                  <Instagram className="h-5 w-5 text-[#ff1493]" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-gray-600">@shuamakeupstudio</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-2">Horario de Atención</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-medium">Lunes - Viernes</p>
                  <p className="text-gray-600">9:00 AM - 7:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Sábado</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Domingo</p>
                  <p className="text-gray-600">Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6">Envíanos un Mensaje</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1493] transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1493] transition-all"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full p-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff1493] transition-all"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-[#ff1493] text-white hover:opacity-90 transition-opacity">
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

