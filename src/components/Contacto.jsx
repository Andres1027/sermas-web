import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react'

// Credenciales de EmailJS
const EMAILJS_SERVICE_ID = 'sermas_service'
const EMAILJS_TEMPLATE_ID = 'template_7ybqfkz'
const EMAILJS_PUBLIC_KEY = 'ZpTk1iulA0HDYRI5v'

const infoContacto = [
  {
    id: 1,
    icono: <Phone size={20} />,
    titulo: "Teléfonos",
    valor: "310 860 6650 · 321 222 6415 · 320 973 5822",
    link: "tel:+573108606650",
  },
  {
    id: 2,
    icono: <MessageCircle size={20} />,
    titulo: "WhatsApp",
    valor: "322 387 1823",
    link: "https://wa.me/573223871823",
  },
  {
    id: 3,
    icono: <Mail size={20} />,
    titulo: "Email",
    valor: "sermaselevadores2012@gmail.com",
    link: "mailto:sermaselevadores2012@gmail.com",
  },
  {
    id: 4,
    icono: <Globe size={20} />,
    titulo: "Sitio web",
    valor: "sermaselevadores.com",
    link: "https://sermaselevadores.com",
  },
  {
    id: 5,
    icono: <Clock size={20} />,
    titulo: "Horario",
    valor: "Lun - Vie: 7am - 6pm · Emergencias 24/7",
    link: null,
  },
]

const serviciosOptions = [
  "Instalación de ascensor nuevo",
  "Modernización de ascensor existente",
  "Mantenimiento preventivo",
  "Mantenimiento correctivo",
  "Revestimiento de cabina",
  "Certificación NTC 5926-1",
  "Interventoría técnica",
  "Suministro de repuestos",
]

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  // Estado para el envío: null = sin enviar, 'enviando' = cargando, 'exito' = ok, 'error' = falló
  const [estadoEnvio, setEstadoEnvio] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Cambiamos el estado a "enviando" para mostrar el loading en el botón
    setEstadoEnvio('enviando')

    try {
      // emailjs.send recibe 4 parámetros:
      // 1. Service ID — qué servicio de email usar
      // 2. Template ID — qué plantilla usar
      // 3. Los datos del formulario — deben coincidir con las variables de la plantilla
      // 4. Public Key — para autenticar
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Estos nombres deben coincidir EXACTAMENTE con los {{variables}} de la plantilla
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono || "No proporcionado",
          servicio: form.servicio || "No especificado",
          mensaje: form.mensaje,
        },
        EMAILJS_PUBLIC_KEY
      )

      // Si llegó acá, el email se envió correctamente
      setEstadoEnvio('exito')

    } catch (error) {
      // Si hubo un error, lo mostramos
      console.error('Error al enviar:', error)
      setEstadoEnvio('error')
    }
  }

  return (
    <section id="contacto" className="py-24 bg-[#1B2D5B]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Hablemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Contáctanos <span className="text-[#2A8FA8]">hoy</span>
          </h2>
          <div className="w-20 h-1 bg-[#2A8FA8] mx-auto mt-4" />
          <p className="text-blue-200 mt-6 max-w-xl mx-auto">
            Cuéntanos tu proyecto. Te respondemos en menos de 24 horas
            con una propuesta personalizada sin costo. Trabajamos en todo Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* COLUMNA IZQUIERDA */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Información de contacto
            </h3>

            <div className="space-y-6 mb-10">
              {infoContacto.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="text-[#2A8FA8] bg-[#2A8FA8]/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    {item.icono}
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-1">{item.titulo}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-[#2A8FA8] transition-colors"
                      >
                        {item.valor}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.valor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573223871823?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SERMAS%20Elevadores"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              Escribirnos por WhatsApp
            </a>
          </div>

          {/* COLUMNA DERECHA — Formulario */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">

            {/* ESTADO: ÉXITO */}
            {estadoEnvio === 'exito' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 rounded-full bg-[#2A8FA8]/20 flex items-center justify-center mb-6">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Mensaje enviado
                </h3>
                <p className="text-blue-200 mb-8 max-w-xs">
                  Recibimos tu solicitud. Un asesor de SERMAS te contacta
                  en menos de 24 horas.
                </p>
                <button
                  onClick={() => {
                    setEstadoEnvio(null)
                    setForm({ nombre: "", email: "", telefono: "", servicio: "", mensaje: "" })
                  }}
                  className="text-[#2A8FA8] font-semibold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>

            ) : (
              // FORMULARIO NORMAL
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="text-sm text-blue-200 mb-1 block">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-[#2A8FA8] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-blue-200 mb-1 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-[#2A8FA8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-200 mb-1 block">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+57 300 000 0000"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-[#2A8FA8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-blue-200 mb-1 block">
                    Servicio de interés
                  </label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    style={{ backgroundColor: '#1B2D5B' }}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2A8FA8] transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviciosOptions.map((opcion, i) => (
                      <option key={i} value={opcion}>{opcion}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-blue-200 mb-1 block">
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Describe tu proyecto: tipo de edificio, número de pisos, qué necesitas..."
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-blue-300 focus:outline-none focus:border-[#2A8FA8] transition-colors resize-none"
                  />
                </div>

                {/* ESTADO: ERROR */}
                {estadoEnvio === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.
                  </p>
                )}

                {/* BOTÓN — cambia según el estado del envío */}
                <button
                  type="submit"
                  // disabled bloquea el botón mientras se está enviando
                  disabled={estadoEnvio === 'enviando'}
                  className="w-full bg-[#2A8FA8] text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#1B2D5B] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* El texto del botón cambia según el estado */}
                  {estadoEnvio === 'enviando' ? 'Enviando...' : 'Enviar solicitud'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
