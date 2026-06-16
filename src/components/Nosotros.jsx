// Importamos el ícono de chulito para la lista de valores
import { CheckCircle } from 'lucide-react'

// Datos de las estadísticas — separados del JSX para fácil edición
const estadisticas = [
  { numero: "2012", label: "Año de fundación" },
  { numero: "30+", label: "Proyectos completados" },
  { numero: "12+", label: "Ascensores en mantenimiento" },
  { numero: "<2h", label: "Tiempo de respuesta" },
]

// Valores diferenciales de la empresa
const valores = [
  "Certificación bajo norma técnica NTC 5926-1",
  "Equipo propio de ingenieros, supervisores y técnicos",
  "Manejamos todas las marcas del mercado",
  "Precios competitivos con equipos de calidad",
  "Responsabilidad, honestidad y cumplimiento",
  "Suministro de repuestos para todas las marcas",
]
function Nosotros() {
  return (
    // bg-gray-900 → Fondo ligeramente más claro que el anterior
    // Esto crea contraste entre secciones sin salir de la paleta oscura
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* LAYOUT DE DOS COLUMNAS */}
        {/* grid-cols-1      → En móvil una columna */}
        {/* lg:grid-cols-2   → En pantallas grandes dos columnas */}
        {/* lg: es el breakpoint de Tailwind para >= 1024px */}
        {/* gap-16           → Espacio generoso entre columnas */}
        {/* items-center     → Alinea verticalmente al centro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* COLUMNA IZQUIERDA — Imagen */}
          {/* relative → Necesario para posicionar el badge encima */}
          <div className="relative">
            {/* Imagen principal */}
            {/* w-full        → Ocupa todo el ancho de su columna */}
            {/* h-96          → Alto fijo de 384px */}
            {/* lg:h-[500px]  → En pantallas grandes, más alta */}
            {/* object-cover  → La imagen cubre sin distorsionarse */}
            {/* rounded-2xl   → Bordes redondeados */}
            <img
              src="/nosotros.jpg"
              alt="Equipo técnico de SERMAS Elevadores"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
            />

            {/* Badge flotante encima de la imagen */}
            {/* absolute         → Se posiciona sobre la imagen */}
            {/* -bottom-6        → Sale 24px hacia abajo del borde inferior */}
            {/* -right-6         → Sale 24px hacia la derecha */}
            {/* bg-[#2A8FA8]     → Fondo teal */}
            {/* text-white       → Texto blanco */}
            {/* p-6              → Espacio interno */}
            {/* rounded-2xl      → Bordes redondeados */}
            {/* shadow-xl        → Sombra pronunciada */}
            <div className="absolute -bottom-6 -right-6 bg-[#2A8FA8] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">2012</p>
              <p className="text-sm font-medium mt-1">Fundados en Colombia</p>
            </div>
          </div>

          {/* COLUMNA DERECHA — Contenido de texto */}
          {/* pt-8 → Empuja el contenido un poco abajo en móvil */}
          <div className="pt-8 lg:pt-0">
            {/* Etiqueta pequeña — mismo patrón que las secciones anteriores */}
            <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
              Quiénes somos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2D5B] mt-4 mb-6">
              Más de una década{" "}
              <span className="text-[#2A8FA8]">elevando Colombia</span>
            </h2>

            {/* text-gray-400   → Gris legible */}
            {/* leading-relaxed → Interlineado cómodo */}
            {/* mb-4            → Espacio entre párrafos */}
            <p className="text-gray-500 leading-relaxed mb-4">
              SERMAS ELEVADORES S.A.S. es una empresa colombiana fundada en
              2012, especializada en servicios de instalación y mantenimiento de
              transporte vertical. Desde nuestros inicios hemos construido una
              reputación basada en la seriedad, honestidad y cumplimiento.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Nuestra organización está conformada por ingenieros, supervisores
              y técnicos con amplia experiencia en mantenimiento preventivo y
              correctivo, modernización funcional, revestimiento de cabina y
              montaje de elevadores. Trabajamos con todas las marcas del mercado
              colombiano.
            </p>

            {/* LISTA DE VALORES */}
            {/* space-y-3 → Espacio vertical de 12px entre cada item */}
            <ul className="space-y-3 mb-10">
              {valores.map((valor, index) => (
                // El "index" lo usamos como key porque los valores no tienen id
                // En listas estáticas que nunca cambian de orden, esto está bien
                <li key={index} className="flex items-center gap-3">
                  {/* Ícono de chulito en teal */}
                  <CheckCircle size={20} className="text-[#2A8FA8] shrink-0" />
                  {/* shrink-0 evita que el ícono se encoja si el texto es largo */}
                  <span className="text-gray-600">{valor}</span>
                </li>
              ))}
            </ul>

            {/* ESTADÍSTICAS EN GRID */}
            {/* grid-cols-2 → Siempre dos columnas */}
            {/* gap-6       → Espacio entre celdas */}
            <div className="grid grid-cols-2 gap-6">
              {estadisticas.map((stat, index) => (
                <div
                  key={index}
                  // bg-gray-800     → Fondo gris oscuro para las celdas
                  // rounded-xl      → Bordes redondeados
                  // p-4             → Espacio interno
                  // border          → Borde
                  // border-gray-700 → Borde gris sutil
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  {/* Número grande en teal */}
                  <p className="text-3xl font-bold text-[#2A8FA8]">
                    {stat.numero}
                  </p>
                  {/* Etiqueta descriptiva */}
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros