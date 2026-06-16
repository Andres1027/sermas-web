// Importamos los íconos específicos que vamos a usar
// Lucide tiene cientos de íconos, solo importamos los que necesitamos
import { useState } from 'react'
import { Settings, Wrench, Zap, ArrowRight, Shield, ClipboardList, Package, X, CheckCircle } from 'lucide-react'

// Definimos los datos de las tarjetas por fuera del componente
// Esto es una buena práctica: separar los datos de la estructura visual
// Si mañana quieres agregar un servicio, solo tocas este array
const servicios = [
  {
    id: 1,
    icono: <Settings size={40} />,
    titulo: "Instalación",
    descripcion:
      "Instalamos ascensores nuevos en edificios residenciales, comerciales e institucionales bajo los estándares de la NTC 5926-1.",
    detalle: "Ver más",
    // Contenido extra para el modal
    detalleCompleto:
      "Realizamos la instalación completa de ascensores nuevos en todo tipo de edificaciones. Nuestro proceso incluye visita técnica, diseño del proyecto, suministro del equipo, montaje y puesta en marcha.",
    caracteristicas: [
      "Instalación en edificios residenciales, comerciales e institucionales",
      "Cumplimiento de la norma técnica NTC 5926-1",
      "Trabajamos con todas las marcas del mercado",
      "Visita técnica y asesoría sin costo",
      "Garantía en materiales y mano de obra",
      "Acompañamiento post-instalación",
    ],
  },
  {
    id: 2,
    icono: <Zap size={40} />,
    titulo: "Modernización",
    descripcion:
      "Actualizamos ascensores obsoletos con tecnología de punta mejorando eficiencia energética, seguridad y confort.",
    detalle: "Ver más",
    detalleCompleto:
      "Modernizamos ascensores de cualquier marca y antigüedad. Actualizamos el sistema de control, puertas, cabina y componentes eléctricos para que tu ascensor funcione como nuevo con tecnología actual.",
    caracteristicas: [
      "Modernización funcional de sistemas de control",
      "Revestimiento y renovación de cabina",
      "Actualización de puertas automáticas",
      "Mejora de eficiencia energética hasta un 40%",
      "Compatibilidad con todas las marcas existentes",
      "Certificación post-modernización",
    ],
  },
  {
    id: 3,
    icono: <Wrench size={40} />,
    titulo: "Mantenimiento",
    descripcion:
      "Ofrecemos mantenimiento preventivo y correctivo para todas las marcas con equipo propio de ingenieros y técnicos certificados.",
    detalle: "Ver más",
    detalleCompleto:
      "Nuestros contratos de mantenimiento garantizan el funcionamiento óptimo de tu ascensor. Contamos con equipo propio de ingenieros, supervisores y técnicos con amplia experiencia en todas las marcas del mercado.",
    caracteristicas: [
      "Mantenimiento preventivo programado",
      "Mantenimiento correctivo de emergencia",
      "Atención en menos de 2 horas ante emergencias",
      "Disponibilidad 24/7 los 7 días de la semana",
      "Servicio para todas las marcas del mercado",
      "Informes técnicos periódicos",
    ],
  },
  {
    id: 4,
    icono: <Shield size={40} />,
    titulo: "Norma Técnica NTC 5926-1",
    descripcion:
      "Realizamos adecuaciones y certificaciones bajo la norma técnica colombiana NTC 5926-1 para ascensores existentes.",
    detalle: "Ver más",
    detalleCompleto:
      "La NTC 5926-1 es la norma técnica colombiana que regula los requisitos de seguridad para ascensores existentes. En SERMAS realizamos el diagnóstico, adecuación y certificación de tu equipo para cumplir con esta normativa.",
    caracteristicas: [
      "Diagnóstico técnico del estado actual del equipo",
      "Adecuaciones necesarias para cumplir la norma",
      "Gestión del proceso de certificación",
      "Documentación técnica completa",
      "Coordinación con entidades certificadoras",
      "Seguimiento post-certificación",
    ],
  },
  {
    id: 5,
    icono: <ClipboardList size={40} />,
    titulo: "Interventoría",
    descripcion:
      "Prestamos servicios de interventoría técnica para proyectos de instalación y modernización de ascensores.",
    detalle: "Ver más",
    detalleCompleto:
      "Ofrecemos servicios de interventoría técnica independiente para proyectos de ascensores. Verificamos que las instalaciones y modernizaciones cumplan con las especificaciones técnicas, normativas y contractuales pactadas.",
    caracteristicas: [
      "Revisión de especificaciones técnicas del proyecto",
      "Supervisión del proceso de instalación",
      "Verificación de cumplimiento normativo",
      "Informes técnicos de avance y cierre",
      "Control de calidad de materiales y equipos",
      "Acompañamiento en pruebas de funcionamiento",
    ],
  },
  {
    id: 6,
    icono: <Package size={40} />,
    titulo: "Suministro de Repuestos",
    descripcion:
      "Contamos con suministro de repuestos para todas las marcas de ascensores del mercado colombiano.",
    detalle: "Ver más",
    detalleCompleto:
      "Suministramos repuestos originales y compatibles para todas las marcas de ascensores presentes en el mercado colombiano. Garantizamos tiempos de respuesta óptimos para minimizar el tiempo de parada de tu equipo.",
    caracteristicas: [
      "Repuestos para todas las marcas del mercado",
      "Repuestos originales y de alta calidad",
      "Tiempos de entrega óptimos",
      "Asesoría técnica en la selección del repuesto",
      "Garantía en todos los repuestos suministrados",
      "Instalación incluida si se requiere",
    ],
  },
]

function Servicios() {
  // Estado para controlar si el modal está visible
  const [modalAbierto, setModalAbierto] = useState(false)

  // Estado para guardar qué servicio se está mostrando en el modal
  // null significa que no hay ninguno seleccionado
  const [servicioActivo, setServicioActivo] = useState(null)

  // Función que abre el modal con el servicio clickeado
  const abrirModal = (servicio) => {
    setServicioActivo(servicio)
    setModalAbierto(true)
  }

  // Función que cierra el modal y limpia el servicio activo
  const cerrarModal = () => {
    setModalAbierto(false)
    setServicioActivo(null)
  }

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Lo que hacemos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B2D5B] mt-4">
            Nuestros <span className="text-[#2A8FA8]">Servicios</span>
          </h2>
          <div className="w-20 h-1 bg-[#2A8FA8] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              onClick={() => abrirModal(servicio)}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#2A8FA8] hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer select-none"
            >
              <div className="text-[#2A8FA8] bg-[#2A8FA8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2A8FA8] group-hover:text-white transition-all duration-300">
                {servicio.icono}
              </div>

              <h3 className="text-xl font-bold text-[#1B2D5B] mb-4">
                {servicio.titulo}
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                {servicio.descripcion}
              </p>

              {/* Al hacer clic llama a abrirModal con este servicio */}
              <div className="flex items-center gap-2 text-[#2A8FA8] font-semibold group-hover:gap-4 transition-all duration-300">
                {servicio.detalle}
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {/* Solo se renderiza si modalAbierto es true Y hay un servicioActivo */}
      {modalAbierto && servicioActivo && (
        // FONDO OSCURO — cubre toda la pantalla
        // fixed inset-0     → Cubre todo el viewport
        // bg-black/60       → Negro con 60% opacidad
        // z-50              → Por encima de todo
        // flex items-center justify-center → Centra el modal
        // p-4               → Espacio en móvil para que no pegue a los bordes
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          // Clic en el fondo oscuro cierra el modal
          onClick={cerrarModal}
        >
          {/* CONTENIDO DEL MODAL */}
          {/* bg-white        → Fondo blanco */}
          {/* rounded-2xl     → Bordes redondeados */}
          {/* max-w-lg        → Ancho máximo de 512px */}
          {/* w-full          → En móvil ocupa todo el ancho */}
          {/* max-h-[90vh]    → Máximo 90% del alto de la pantalla */}
          {/* overflow-y-auto → Scroll si el contenido es muy largo */}
          {/* p-8             → Espacio interno */}
          {/* relative        → Para posicionar el botón X */}
          <div
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative"
            // stopPropagation evita que el clic dentro del modal lo cierre
            // Sin esto, cualquier clic dentro del modal también dispararía
            // el onClick del fondo oscuro de arriba
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOTÓN CERRAR — X en la esquina superior derecha */}
            <button
              onClick={cerrarModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#1B2D5B] transition-colors"
            >
              <X size={24} />
            </button>

            {/* ÍCONO DEL SERVICIO */}
            <div className="text-[#2A8FA8] bg-[#2A8FA8]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {servicioActivo.icono}
            </div>

            {/* TÍTULO */}
            <h3 className="text-2xl font-bold text-[#1B2D5B] mb-4">
              {servicioActivo.titulo}
            </h3>

            {/* DESCRIPCIÓN COMPLETA */}
            <p className="text-gray-500 leading-relaxed mb-6">
              {servicioActivo.detalleCompleto}
            </p>

            {/* LÍNEA DIVISORA */}
            <div className="w-full h-px bg-gray-100 mb-6" />

            {/* CARACTERÍSTICAS */}
            <h4 className="text-[#1B2D5B] font-bold mb-4">¿Qué incluye?</h4>
            <ul className="space-y-3 mb-8">
              {servicioActivo.caracteristicas.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#2A8FA8] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* BOTÓN CTA dentro del modal */}

            <a
              href="#contacto"
              onClick={cerrarModal}
              className="block w-full bg-[#2A8FA8] text-white text-center py-4 rounded-xl font-bold hover:bg-[#1B2D5B] transition-all duration-300"
            >
              Solicitar este servicio
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
export default Servicios