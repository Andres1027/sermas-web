import { useState } from 'react'
import { MapPin, ArrowRight, X, Calendar, Tag } from 'lucide-react'
// Categorías para los botones de filtro
const filtros = [
  { id: "todos", label: "Todos" },
  { id: "instalacion", label: "Instalación" },
  { id: "modernizacion", label: "Modernización" },
  { id: "mantenimiento", label: "Mantenimiento" },
] 

// Proyectos con su categoría — esto es lo que vamos a filtrar
const proyectos = [
  {
    id: 1,
    imagen: "/proyecto1.jpeg",
    categoria: "instalacion",
    titulo: "Bienestar IPS S.A.S.",
    ubicacion: "Bogotá, Colombia",
    descripcion:
      "Instalación de ascensor nuevo uso comercial en múltiples sedes.",
    // Información extra para el modal
    descripcionCompleta:
      "Proyecto de instalación de ascensores nuevos para uso comercial en múltiples sedes de Bienestar IPS S.A.S.: Chapinero Especialistas, Fusagasugá, Centenario y Murillo. Cada sede requirió un diseño personalizado según las dimensiones y necesidades del espacio.",
    año: "2022",
    tipo: "Ascensor comercial",
    estado: "Completado",
  },
  {
    id: 2,
    imagen: "/proyecto2.jpeg",
    categoria: "instalacion",
    titulo: "Multifamiliares Zona Álamos",
    ubicacion: "Bogotá, Colombia",
    descripcion: "Instalación de ascensores nuevos en varios multifamiliares.",
    descripcionCompleta:
      "Instalación de ascensores nuevos en varios conjuntos residenciales de la zona Álamos: La Florida SAR, Florida, Álamos 1 y 2, Hábitat 95 P.H. Proyectos ejecutados bajo la norma técnica NTC 5926-1 con garantía en materiales y mano de obra.",
    año: "2021",
    tipo: "Ascensor residencial",
    estado: "Completado",
  },
  {
    id: 3,
    imagen: "/proyecto3.jpeg",
    categoria: "modernizacion",
    titulo: "Edificio Altos de San Antonio",
    ubicacion: "Bogotá, Colombia",
    descripcion: "Modernización de ascensor uso residencial.",
    descripcionCompleta:
      "Modernización completa de ascensor residencial incluyendo nuevos acabados en cabina, sistema de control digital y actualización de puertas automáticas. El proyecto mejoró significativamente la experiencia de los residentes y redujo el consumo energético.",
    año: "2023",
    tipo: "Modernización residencial",
    estado: "Completado",
  },
  {
    id: 4,
    imagen: "/proyecto4.jpeg",
    categoria: "modernizacion",
    titulo: "Fundación Universitaria Los Libertadores",
    ubicacion: "Bogotá, Colombia",
    descripcion:
      "Modernización de ascensores en sede universitaria. Calificación EXCELENTE en evaluación de proveedores 2024.",
    descripcionCompleta:
      "Modernización de ascensores en sede universitaria con alto flujo de personas. La Fundación Universitaria Los Libertadores otorgó a SERMAS una calificación de 5 sobre 5 — EXCELENTE — en su evaluación anual de proveedores 2024, evaluando criterios de calidad, cumplimiento, servicio al cliente y seguridad en el trabajo. Actualmente en contrato de mantenimiento activo.",
    año: "2022",
    tipo: "Modernización institucional",
    estado: "Calificación EXCELENTE 2024",
  },
  {
    id: 5,
    imagen: "/proyecto7.jpeg",
    categoria: "mantenimiento",
    titulo: "C.C. Mall 138",
    ubicacion: "Bogotá, Colombia",
    descripcion: "Mantenimiento preventivo y correctivo de ascensores.",
    descripcionCompleta:
      "Contrato de mantenimiento preventivo y correctivo para todos los ascensores del centro comercial Mall 138. Servicio con disponibilidad 24/7 y tiempo de respuesta garantizado en menos de 2 horas ante cualquier emergencia.",
    año: "2023",
    tipo: "Contrato de mantenimiento",
    estado: "Contrato activo",
  },
  {
    id: 6,
    imagen: "/proyecto6.jpeg",
    categoria: "instalacion",
    titulo: "Clínica Oftalmológica de Cartagena",
    ubicacion: "Cartagena, Colombia",
    descripcion: "Modernización de ascensor en clínica especializada.",
    descripcionCompleta:
      "Modernización de ascensor en clínica especializada cumpliendo normas de uso médico y accesibilidad. El proyecto incluyó adecuaciones especiales para el transporte seguro de pacientes y equipos médicos.",
    año: "2023",
    tipo: "Uso médico",
    estado: "Completado",
  },
];

function Portafolio() {
  const [filtroActivo, setFiltroActivo] = useState("todos")

  // Estado para el modal — mismo patrón que Servicios
  const [modalAbierto, setModalAbierto] = useState(false)
  const [proyectoActivo, setProyectoActivo] = useState(null)

  const proyectosFiltrados =
    filtroActivo === "todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtroActivo)

  const abrirModal = (proyecto) => {
    setProyectoActivo(proyecto)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setProyectoActivo(null)
  }

  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Nuestro trabajo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B2D5B] mt-4">
            Proyectos <span className="text-[#2A8FA8]">destacados</span>
          </h2>
          <div className="w-20 h-1 bg-[#2A8FA8] mx-auto mt-4" />
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setFiltroActivo(filtro.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filtroActivo === filtro.id
                  ? "bg-[#2A8FA8] text-white"
                  : "bg-transparent border border-gray-300 text-gray-500 hover:border-[#2A8FA8] hover:text-[#2A8FA8]"
              }`}
            >
              {filtro.label}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              onClick={() => abrirModal(proyecto)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer select-none"
            >
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-[#1B2D5B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block bg-[#2A8FA8] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit uppercase tracking-wider">
                  {proyecto.categoria.charAt(0).toUpperCase() + proyecto.categoria.slice(1)}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">
                  {proyecto.titulo}
                </h3>
                <div className="flex items-center gap-1 text-[#2A8FA8] text-sm mb-3">
                  <MapPin size={14} />
                  <span>{proyecto.ubicacion}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {proyecto.descripcion}
                </p>
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  Ver proyecto <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      {/* MODAL DEL PROYECTO */}
      {modalAbierto && proyectoActivo && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={cerrarModal}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* IMAGEN GRANDE EN EL MODAL */}
            {/* w-full        → Ocupa todo el ancho del modal */}
            {/* h-72          → Alto generoso para que se vea bien la foto */}
            {/* object-cover  → Cubre sin distorsión */}
            {/* rounded-t-2xl → Solo redondea la parte de arriba */}
            <div className="relative">
              <img
                src={proyectoActivo.imagen}
                alt={proyectoActivo.titulo}
                className="w-full h-72 object-cover rounded-t-2xl"
              />

              {/* Badge de categoría encima de la imagen */}
              <span className="absolute top-4 left-4 bg-[#2A8FA8] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {proyectoActivo.categoria.charAt(0).toUpperCase() + proyectoActivo.categoria.slice(1)}
              </span>

              {/* Botón cerrar encima de la imagen */}
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#1B2D5B] rounded-full p-2 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* CONTENIDO DEL MODAL */}
            <div className="p-8">

              {/* Título y ubicación */}
              <h3 className="text-2xl font-bold text-[#1B2D5B] mb-2">
                {proyectoActivo.titulo}
              </h3>
              <div className="flex items-center gap-1 text-[#2A8FA8] mb-6">
                <MapPin size={16} />
                <span className="font-medium">{proyectoActivo.ubicacion}</span>
              </div>

              {/* Descripción completa */}
              <p className="text-gray-500 leading-relaxed mb-6">
                {proyectoActivo.descripcionCompleta}
              </p>

              {/* DETALLES TÉCNICOS EN GRID */}
              {/* grid-cols-3 → 3 celdas en fila */}
              <div className="grid grid-cols-3 gap-4 mb-8">

                {/* Año */}
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Calendar size={20} className="text-[#2A8FA8] mx-auto mb-2" />
                  <p className="text-xs text-gray-400 mb-1">Año</p>
                  <p className="text-[#1B2D5B] font-bold text-sm">{proyectoActivo.año}</p>
                </div>

                {/* Tipo */}
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <Tag size={20} className="text-[#2A8FA8] mx-auto mb-2" />
                  <p className="text-xs text-gray-400 mb-1">Tipo</p>
                  <p className="text-[#1B2D5B] font-bold text-sm">{proyectoActivo.tipo}</p>
                </div>

                {/* Estado */}
                <div className="bg-slate-50 rounded-xl p-4 text-center">
                  <MapPin size={20} className="text-[#2A8FA8] mx-auto mb-2" />
                  <p className="text-xs text-gray-400 mb-1">Estado</p>
                  <p className="text-[#1B2D5B] font-bold text-sm">{proyectoActivo.estado}</p>
                </div>

              </div>

              {/* BOTÓN CTA */}
              <a
                href="#contacto"
                onClick={cerrarModal}
                className="block w-full bg-[#2A8FA8] text-white text-center py-4 rounded-xl font-bold hover:bg-[#1B2D5B] transition-all duration-300"
              >
                Solicitar proyecto similar
              </a>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}


export default Portafolio