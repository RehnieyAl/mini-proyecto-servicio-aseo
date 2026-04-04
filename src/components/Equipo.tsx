export const Equipo = () => (
  <section className="bg-gray-50 py-20 px-6">
    <h2 className="text-3xl font-bold text-center mb-8">Conoce a nuestro equipo</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Carlos Pérez</h3>
        <p className="text-gray-600">Especialista en oficinas, 5 años de experiencia.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">María Gómez</h3>
        <p className="text-gray-600">Experta en limpieza de hogares, atención al detalle.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Luis Rodríguez</h3>
        <p className="text-gray-600">Encargado post-evento, siempre listo.</p>
      </div>
    </div>
  </section>
);