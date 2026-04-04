export const Servicios = () => (
  <section className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Limpieza de Hogar</h3>
        <p className="text-gray-600">Incluye cocina, baños y áreas comunes.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Limpieza de Oficina</h3>
        <p className="text-gray-600">Mantén tu oficina limpia y organizada.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Limpieza Post-Evento</h3>
        <p className="text-gray-600">Nos encargamos después de tus eventos.</p>
      </div>
    </div>
  </section>
);