// Hero.jsx - La sección principal, lo primero que ve el usuario

function Hero() {
  return (
    // <section> le dice al navegador "esto es una sección de contenido"
    // relative        → Necesario para posicionar elementos hijos con absolute
    // h-screen        → Altura del 100% de la pantalla visible
    // flex            → Flexbox para centrar el contenido
    // items-center    → Centra verticalmente
    // justify-center  → Centra horizontalmente
    // overflow-hidden → Evita que la imagen desborde
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* CAPA 1: Imagen de fondo */}
      {/* absolute      → Se posiciona relativo al padre (la section) */}
      {/* inset-0       → top:0, right:0, bottom:0, left:0 — cubre todo */}
      {/* bg-cover      → La imagen cubre todo el espacio sin distorsión */}
      {/* bg-center     → La imagen se centra */}
      {/* z-0           → La capa más atrás */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* CAPA 2: Overlay oscuro encima de la imagen */}
      {/* Esto hace que el texto blanco sea legible sobre la foto */}
      {/* absolute inset-0 → Cubre exactamente lo mismo que la imagen */}
      {/* bg-[#1B2D5B]    → Color azul marino del logo */}
      {/* opacity-75      → 75% de opacidad, deja ver la imagen detrás */}
      {/* z-10            → Encima de la imagen pero debajo del texto */}
      <div className="absolute inset-0 bg-[#1B2D5B] opacity-75 z-10" />

      {/* CAPA 3: El contenido de texto */}
      {/* relative   → Necesario para que z-index funcione */}
      {/* z-20       → Encima del overlay */}
      {/* text-center → Todo centrado */}
      {/* px-4       → Padding lateral para que no pegue en móvil */}
      {/* max-w-4xl  → Máximo ancho del contenido */}
      {/* mx-auto    → Centrado */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Etiqueta pequeña arriba del título */}
        {/* inline-block          → Se comporta como bloque pero ocupa solo su ancho */}
        {/* bg-[#2A8FA8]          → Fondo teal */}
        {/* text-white            → Texto blanco */}
        {/* text-sm               → Fuente pequeña */}
        {/* font-semibold         → Semi negrita */}
        {/* px-4 py-1             → Espacio interno */}
        {/* rounded-full          → Pastilla */}
        {/* mb-6                  → Margen abajo de 24px */}
        {/* tracking-widest       → Letras muy separadas entre sí */}
        {/* uppercase             → Todo en mayúsculas */}
        <span className="inline-block bg-[#2A8FA8] text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
          Desde 2012 · Transporte vertical
        </span>

        {/* Título principal */}
        {/* text-5xl    → Fuente muy grande (48px) */}
        {/* md:text-7xl → En pantallas medianas, aún más grande (72px) */}
        {/* md: es un "breakpoint" de Tailwind — aplica solo en pantallas >= 768px */}
        {/* font-bold   → Negrita */}
        {/* text-white  → Blanco */}
        {/* leading-tight → Interlineado compacto */}
        {/* mb-6        → Margen abajo */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Elevamos {/* {" "} es un espacio en JSX */}
          {/* El span permite darle color diferente a una palabra */}
          <span className="text-[#2A8FA8]">tus expectativas</span>
        </h1>

        {/* Subtítulo descriptivo */}
        {/* text-lg     → Fuente levemente grande */}
        {/* md:text-xl  → Más grande en pantallas medianas */}
        {/* text-gray-300 → Gris claro, no tan brillante como el blanco */}
        {/* mb-10       → Margen grande abajo antes de los botones */}
        {/* max-w-2xl   → Limita el ancho del párrafo para mejor lectura */}
        {/* mx-auto     → Lo centra */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Empresa colombiana especializada en instalación, mantenimiento
          preventivo y correctivo, modernización y revestimiento de ascensores.
          Manejamos todas las marcas.
        </p>

        {/* Contenedor de botones */}
        {/* flex             → En fila */}
        {/* flex-col         → En móvil van en columna */}
        {/* sm:flex-row      → En pantallas >= 640px van en fila */}
        {/* gap-4            → Espacio entre botones */}
        {/* justify-center   → Centrados */}
        <div className="flex flex-row gap-3 justify-center flex-wrap">
          {/* Botón principal */}
          {/* bg-[#2A8FA8]         → Fondo teal */}
          {/* text-white           → Texto blanco */}
          {/* px-8 py-4            → Espacio interno generoso */}
          {/* rounded-full         → Forma de pastilla */}
          {/* font-semibold        → Semi negrita */}
          {/* text-lg              → Fuente grande */}
          {/* hover:bg-white       → Al hover, fondo blanco */}
          {/* hover:text-[#1B2D5B] → Al hover, texto azul marino */}
          {/* transition-all       → Transición suave en todo */}
          {/* duration-300         → 300ms de duración */}
          <a
            href="#servicios"
            className="bg-[#2A8FA8] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg ..."
          >
            Nuestros servicios
          </a>

          {/* Botón secundario — estilo "fantasma" (solo borde) */}
          {/* border-2             → Borde de 2px */}
          {/* border-white         → Borde blanco */}
          {/* text-white           → Texto blanco */}
          {/* hover:bg-white       → Al hover se rellena de blanco */}
          {/* hover:text-[#1B2D5B] → Texto azul marino al hover */}
          <a
            href="#contacto"
            className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg ..."
          >
            Contáctanos
          </a>
        </div>
      </div>

      {/* Flecha animada abajo — indica que hay más contenido */}
      {/* absolute        → Posicionada respecto a la section */}
      {/* bottom-8        → A 32px del fondo */}
      {/* left-1/2        → Al 50% del ancho */}
      {/* -translate-x-1/2 → Corrección para centrar exactamente */}
      {/* z-20            → Encima del overlay */}
      {/* animate-bounce  → Tailwind le da una animación de rebote */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        {/* SVG de una flecha apuntando hacia abajo */}
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Este path dibuja una flecha hacia abajo */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero