import { Shield, Clock, Award, Users, Headphones, Leaf } from 'lucide-react'

// Cada razón tiene ícono, título y descripción corta
// Descripciones cortas — esta sección es para impactar, no para leer
const razones = [
  {
    id: 1,
    icono: <Shield size={32} />,
    titulo: "Seguridad certificada",
    descripcion:
      "Cumplimos todas las normas técnicas colombianas e internacionales. Cada instalación pasa por rigurosos controles de calidad.",
  },
  {
    id: 2,
    icono: <Clock size={32} />,
    titulo: "Respuesta en menos de 2 horas",
    descripcion:
      "Nuestro equipo técnico está disponible 24 horas, 7 días a la semana para atender cualquier emergencia.",
  },
  {
    id: 3,
    icono: <Award size={32} />,
    titulo: "Técnicos certificados",
    descripcion:
      "Todo nuestro personal cuenta con certificación técnica internacional y capacitación continua.",
  },
  {
    id: 4,
    icono: <Users size={32} />,
    titulo: "Equipo propio",
    descripcion:
      "No subcontratamos. Cada trabajo lo ejecuta nuestro propio equipo, garantizando consistencia y calidad.",
  },
  {
    id: 5,
    icono: <Headphones size={32} />,
    titulo: "Soporte post-venta",
    descripcion:
      "La relación no termina con la instalación. Te acompañamos durante toda la vida útil del equipo.",
  },
  {
    id: 6,
    icono: <Leaf size={32} />,
    titulo: "Eficiencia energética",
    descripcion:
      "Instalamos tecnología de bajo consumo que reduce hasta un 40% el gasto energético de tu edificio.",
  },
]

function PorQueElegirnos() {
  return (
    // Esta sección rompe el patrón oscuro — usamos el azul marino como fondo
    // Esto crea un bloque de color que divide visualmente la página
    <section className="py-24 bg-[#1B2D5B]">
      <div className="max-w-6xl mx-auto px-6">
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          {/* Aquí el badge cambia — fondo blanco con texto azul marino */}
          {/* porque el fondo de la sección ya es azul */}
          <span className="inline-block bg-white text-[#1B2D5B] text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Nuestras ventajas
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
            ¿Por qué <span className="text-[#2A8FA8]">elegirnos?</span>
          </h2>

          {/* La línea decorativa ahora es blanca para contrastar con el fondo azul */}
          <div className="w-20 h-1 bg-white mx-auto mt-4" />

          <p className="text-blue-200 mt-6 max-w-2xl mx-auto text-lg">
            {/* blue-200 es un azul claro de Tailwind que se ve bien sobre azul marino */}
            Llevamos más de 15 años siendo el aliado de confianza de
            constructoras, edificios residenciales y empresas en toda Colombia.
          </p>
        </div>

        {/* GRID DE 6 TARJETAS */}
        {/* grid-cols-1      → Móvil: 1 columna */}
        {/* md:grid-cols-2   → Tablet: 2 columnas */}
        {/* lg:grid-cols-3   → Escritorio: 3 columnas */}
        {/* Esto es diseño responsive completo — 3 breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {razones.map((razon) => (
            <div
              key={razon.id}
              // bg-white/5       → Blanco con 5% opacidad — efecto glass sutil
              // backdrop-blur-sm → Desenfoque de fondo (efecto glassmorphism)
              // border-white/10  → Borde blanco con 10% opacidad
              // hover:bg-white/10 → Al hover, el fondo se aclara un poco
              // hover:border-[#2A8FA8] → Borde teal al hover
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#2A8FA8] hover:-translate-y-1 transition-all duration-300"
            >
              {/* ÍCONO */}
              {/* Mismo patrón que en Servicios pero adaptado al fondo azul */}
              <div className="text-[#2A8FA8] bg-[#2A8FA8]/20 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                {razon.icono}
              </div>

              {/* TÍTULO */}
              <h3 className="text-lg font-bold text-white mb-3">
                {razon.titulo}
              </h3>

              {/* DESCRIPCIÓN */}
              {/* text-blue-100 → Azul muy claro, legible sobre azul marino */}
              <p className="text-blue-100 leading-relaxed text-sm">
                {razon.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* FRANJA DE CIERRE — CTA dentro de la sección */}
        {/* mt-16         → Margen grande arriba */}
        {/* bg-[#2A8FA8]  → Fondo teal */}
        {/* rounded-2xl   → Bordes redondeados */}
        {/* p-10          → Espacio interno generoso */}
        {/* text-center   → Todo centrado */}
        <div className="mt-16 bg-[#2A8FA8] rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para dar el siguiente paso?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {/* white/80 → Blanco con 80% opacidad, más suave que blanco puro */}
            Cuéntanos tu proyecto y te asesoramos sin costo. Respondemos en
            menos de 24 horas.
          </p>

          {/* Dos botones: uno sólido blanco, uno fantasma */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="bg-white text-[#1B2D5B] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Solicitar asesoría gratis
            </a>
            <a
              href="#proyectos"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1B2D5B] transition-all duration-300"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PorQueElegirnos