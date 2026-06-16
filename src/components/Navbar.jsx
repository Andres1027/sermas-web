import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
]

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    // bg-white      → Fondo blanco
    // shadow-md     → Sombra suave para que se diferencie del contenido
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO — imagen original con fondo blanco, se integra perfecto */}
        <a href="#inicio">
          {/* h-12 → Alto de 48px, suficiente para que se lea bien */}
          <img
            src="/Logo4.png"
            alt="SERMAS Elevadores"
            className="h-20 w-auto"
          />
        </a>

        {/* LINKS — versión escritorio */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                // text-[#1B2D5B]        → Azul marino sobre fondo blanco
                // hover:text-[#2A8FA8]  → Teal al hover
                className="text-[#1B2D5B] hover:text-[#2A8FA8] transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Botón contacto — mantiene el color teal para destacar */}
          <li>
            <a
              href="#contacto"
              className="bg-[#2A8FA8] text-white px-5 py-2 rounded-full hover:bg-[#1B2D5B] transition-all duration-300 font-medium"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA — móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          // text-[#1B2D5B] → Azul marino sobre fondo blanco
          className="md:hidden text-[#1B2D5B]"
        >
          {menuAbierto ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MENÚ MÓVIL */}
      {menuAbierto && (
        // bg-white        → Mismo fondo blanco
        // border-t        → Línea separadora
        // border-gray-100 → Gris muy claro, sutil
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuAbierto(false)}
                  className="text-[#1B2D5B] hover:text-[#2A8FA8] transition-colors font-medium block py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setMenuAbierto(false)}
                className="block w-full text-center bg-[#2A8FA8] text-white px-5 py-3 rounded-full font-medium mt-2"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar