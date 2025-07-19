export default function HeroSection() {
  return (
    <section className="bg-white py-24 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        Soluciones que <span className="text-blue-600">Conectan</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Impulsamos operaciones con tecnologías adaptadas a las exigencias de tu industria.
      </p>
      <a
        href="/servicios"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Conoce nuestras soluciones
      </a>
    </section>
  );
}
