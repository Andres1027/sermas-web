import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonios = [
  {
    id: 1,
    nombre: "Lina María Camelo Díaz",
    cargo: "Evaluación Anual de Proveedores 2024",
    empresa: "Fundación Universitaria Los Libertadores",
    ciudad: "Bogotá",
    texto:
      "SERMAS Elevadores obtuvo calificación 5 sobre 5 — EXCELENTE — en nuestra evaluación anual de proveedores 2024, basada en criterios de calidad, cumplimiento, servicio al cliente y seguridad. Agradecemos su colaboración y compromiso durante todo el año.",
    estrellas: 5,
    iniciales: "LC",
  },
  {
    id: 2,
    nombre: "Administrador",
    cargo: "Centro Comercial",
    empresa: "C.C. Mall 138",
    ciudad: "Bogotá",
    texto:
      "Llevamos más de un año con SERMAS en contrato de mantenimiento y la diferencia es notable. Los ascensores funcionan sin interrupciones y cuando hemos tenido algún imprevisto han respondido en menos de dos horas. Excelente servicio.",
    estrellas: 5,
    iniciales: "CM",
  },
  {
    id: 3,
    nombre: "Administrador",
    cargo: "Constructor",
    empresa: "Clínica Oftalmológica de Cartagena",
    ciudad: "Cartagena",
    texto:
      "Llevamos 4 proyectos con SERMAS y siempre cumplen. Sus precios son competitivos, pero lo que más valoro es que no generan retrabajos — hacen las cosas bien desde el principio.",
    estrellas: 5,
    iniciales: "CO",
  },
  {
    id: 4,
    nombre: "Administradora",
    cargo: "Gerente de Propiedad Horizontal",
    empresa: "Conjunto Residencial Los Álamos",
    ciudad: "Bogotá",
    texto:
      "SERMAS nos instaló dos ascensores en tiempo récord y sin interrumpir la vida del conjunto. El equipo es profesional, puntual y el servicio postventa ha sido impecable. Llevamos 3 años con el contrato de mantenimiento y cero inconvenientes.",
    estrellas: 5,
    // Iniciales para el avatar — usamos texto en vez de foto para simplificar
    iniciales: "CM",
  },
];

function Testimonios() {
  // Estado que guarda el índice del testimonio visible
  const [actual, setActual] = useState(0)

  // Navegar al siguiente testimonio de forma circular
  const siguiente = () => setActual((actual + 1) % testimonios.length)

  // Navegar al anterior de forma circular
  const anterior = () => setActual((actual - 1 + testimonios.length) % testimonios.length)

  // El testimonio que se muestra actualmente
  const testimonio = testimonios[actual]

  return (
    // bg-gray-900 → Alterna con bg-gray-950 para crear contraste entre secciones
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            Lo que dicen de nosotros
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B2D5B] mt-4">
            Clientes que{" "}
            <span className="text-[#2A8FA8]">confían en SERMAS</span>
          </h2>
          <div className="w-20 h-1 bg-[#2A8FA8] mx-auto mt-4" />
        </div>

        {/* TARJETA DEL TESTIMONIO ACTUAL */}
        {/* bg-gray-800       → Fondo de la tarjeta */}
        {/* rounded-3xl       → Bordes muy redondeados */}
        {/* p-10 md:p-14      → Espacio interno generoso */}
        {/* relative          → Para posicionar las comillas decorativas */}
        <div className="bg-white rounded-3xl p-10 md:p-14 relative shadow-lg">
          {/* COMILLAS DECORATIVAS */}
          {/* Texto gigante como decoración de fondo */}
          {/* absolute         → Posicionada sobre la tarjeta */}
          {/* top-6 left-10    → A 24px del tope y 40px de la izquierda */}
          {/* text-8xl         → Fuente enorme */}
          {/* text-[#2A8FA8]/20 → Teal con 20% opacidad — decorativa, no protagonista */}
          {/* font-serif        → Fuente serif para las comillas — más elegante */}
          {/* leading-none      → Sin interlineado extra */}
          {/* select-none       → El usuario no puede seleccionar este texto */}
          <span className="absolute top-6 left-10 text-8xl text-[#2A8FA8]/20 font-serif leading-none select-none">
            "
          </span>

          {/* ESTRELLAS */}
          {/* flex gap-1 mb-6 → En fila con espacio, margen abajo */}
          <div className="flex gap-1 mb-6">
            {/* Creamos un array de 5 elementos y mapeamos una estrella por cada uno */}
            {/* Array.from({ length: 5 }) crea [undefined, undefined, undefined, undefined, undefined] */}
            {/* Solo nos importa el índice para el key */}
            {Array.from({ length: testimonio.estrellas }).map((_, i) => (
              <Star
                key={i}
                size={20}
                // fill="currentColor" → Rellena la estrella con el color actual
                className="text-[#2A8FA8] fill-[#2A8FA8]"
              />
            ))}
          </div>

          {/* TEXTO DEL TESTIMONIO */}
          {/* text-xl md:text-2xl → Grande para que se lea fácil */}
          {/* text-white          → Blanco */}
          {/* leading-relaxed     → Interlineado cómodo */}
          {/* mb-10               → Margen antes del autor */}
          {/* relative z-10       → Por encima de las comillas decorativas */}
          <p className="text-xl md:text-2xl text-[#1B2D5B] leading-relaxed mb-10 relative z-10">
            {testimonio.texto}
          </p>

          {/* AUTOR */}
          {/* flex items-center gap-4 → Avatar y texto en fila */}
          <div className="flex items-center gap-4">
            {/* Avatar con iniciales */}
            {/* w-14 h-14          → Tamaño del círculo */}
            {/* rounded-full       → Círculo perfecto */}
            {/* bg-[#2A8FA8]       → Fondo teal */}
            {/* flex items-center justify-center → Centra las iniciales */}
            {/* text-white font-bold text-lg → Iniciales en blanco */}
            {/* shrink-0           → No se encoge si el texto es largo */}
            <div className="w-14 h-14 rounded-full bg-[#2A8FA8] flex items-center justify-center text-white font-bold text-lg shrink-0">
              {testimonio.iniciales}
            </div>

            {/* Nombre, cargo y empresa */}
            <div>
              <p className="text-[#1B2D5B] font-bold text-lg">
                {testimonio.nombre}
              </p>
              <p className="text-gray-500 text-sm">
                {/* Mostramos cargo, empresa y ciudad */}
                {testimonio.cargo} · {testimonio.empresa} · {testimonio.ciudad}
              </p>
            </div>
          </div>
        </div>

        {/* CONTROLES DE NAVEGACIÓN */}
        {/* mt-10            → Margen arriba */}
        {/* flex items-center justify-between → Flechas a los lados, puntos al centro */}
        <div className="mt-10 flex items-center justify-between">
          {/* FLECHA ANTERIOR */}
          <button
            onClick={anterior}
            // hover:bg-[#2A8FA8]    → Fondo teal al hover */}
            // hover:border-[#2A8FA8] → Borde teal al hover */}
            // hover:text-white       → Texto blanco al hover */}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:bg-[#2A8FA8] hover:border-[#2A8FA8] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          {/* PUNTOS INDICADORES */}
          {/* Muestran en qué testimonio estás */}
          <div className="flex gap-3">
            {testimonios.map((_, i) => (
              <button
                key={i}
                // Al hacer clic en un punto, salta directo a ese testimonio
                onClick={() => setActual(i)}
                // Estilos condicionales:
                // Punto activo → ancho 32px + color teal
                // Punto inactivo → ancho 12px + gris
                // w-8 = 32px, w-3 = 12px
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === actual
                    ? "w-8 bg-[#2A8FA8]"
                    : "w-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* FLECHA SIGUIENTE */}
          <button
            onClick={siguiente}
            className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-[#2A8FA8] hover:border-[#2A8FA8] hover:text-white transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        {/* BOTÓN GOOGLE REVIEWS */}
        {/* mt-12          → Margen arriba para separarlo de los controles */}
        {/* text-center    → Centrado */}
        <div className="mt-12 text-center">
          {/* Texto invitando a dejar reseña */}
          <p className="text-gray-500 mb-4 text-sm">
            ¿Trabajaste con nosotros? Cuéntale a otros tu experiencia
          </p>

          <a
            href="https://maps.app.goo.gl/1GEEpbnp29D3dwbz7"
            target="_blank"
            rel="noopener noreferrer"
            // inline-flex   → Para alinear el ícono y el texto en fila
            // items-center  → Centrados verticalmente
            // gap-3         → Espacio entre ícono y texto
            className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-[#1B2D5B] px-8 py-4 rounded-full font-bold text-lg hover:border-[#2A8FA8] hover:text-[#2A8FA8] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            {/* Logo de Google en SVG — no necesita librería */}
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Déjanos tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonios