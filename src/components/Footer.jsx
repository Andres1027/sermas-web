// Ya no necesitamos íconos de redes sociales
// Los eliminamos del import
const linksServicios = [
  { label: "Instalación de ascensores", href: "#servicios" },
  { label: "Modernización", href: "#servicios" },
  { label: "Mantenimiento preventivo", href: "#servicios" },
  { label: "Mantenimiento correctivo", href: "#servicios" },
  { label: "Asesoría técnica", href: "#servicios" },
]

const linksEmpresa = [
  { label: "Quiénes somos", href: "#nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contáctanos", href: "#contacto" },
]

const certificaciones = [
  "NTC 5926-1",
  "RETIE Certificado",
  "ICONTEC",
]

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* COLUMNA 1 — Identidad */}
          <div className="lg:col-span-1">
            {/* Logo en texto — sin íconos de redes */}
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-[#2A8FA8]">SERMAS </span>
              ELEVADORES
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empresa colombiana fundada en 2012, especializada en
              instalación, mantenimiento y modernización de ascensores
              en todo el país.
            </p>
            {/* Información de contacto rápido */}
            <div className="space-y-2">
              <a
                href="tel:+573223871823"
                className="block text-gray-400 text-sm hover:text-[#2A8FA8] transition-colors"
              >
                📞 322 387 1823
              </a>
              <a
                href="mailto:sermaselevadores2012@gmail.com"
                className="block text-gray-400 text-sm hover:text-[#2A8FA8] transition-colors"
              >
                ✉️ sermaselevadores2012@gmail.com
              </a>
            </div>
          </div>

          {/* COLUMNA 2 — Servicios */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Servicios</h4>
            <ul className="space-y-3">
              {linksServicios.map((link) => (
                <li key={link.label}>
                  {/* Cada link lleva a la sección de servicios */}
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#2A8FA8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3 — Empresa */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Empresa</h4>
            <ul className="space-y-3">
              {linksEmpresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#2A8FA8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4 — Certificaciones */}
          <div>
            <h4 className="text-white font-bold mb-5 text-lg">Certificaciones</h4>
            <div className="space-y-3">
              {certificaciones.map((cert) => (
                <div
                  key={cert}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 text-sm font-medium"
                >
                  ✓ {cert}
                </div>
              ))}
            </div>
            {/* WhatsApp directo en el footer */}
            
            <a
              href="https://wa.me/573223871823?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20SERMAS%20Elevadores"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              💬 WhatsApp
            </a>
          </div>

        </div>

        {/* PIE LEGAL */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SERMAS Elevadores S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {["Política de privacidad", "Términos de uso"].map((link) => (
                
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 text-sm hover:text-[#2A8FA8] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer