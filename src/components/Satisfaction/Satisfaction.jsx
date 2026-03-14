export default function Satisfaction() {
  return (
    // section es semánticamente mejor que un div para un bloque grande de contenido
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Grilla: 1 columna en celular, 3 en pantallas medianas/grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Bloque 1 */}
          <div>
            <h3 className="text-xl font-bold text-very-dark-blue mb-4">
              Garantía de <span className="text-light-blue">satisfacción</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Si el servicio no cumple tus expectativas, trabajaremos contigo para solucionarlo y asegurarnos de que quedes conforme.
            </p>
          </div>

          {/* Bloque 2 */}
          <div>
            <h3 className="text-xl font-bold text-very-dark-blue mb-4">
              Profesionales <span className="text-light-blue">verificados</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Antes de formar parte de OficiAR, cada prestador pasa por un proceso de validación de identidad y revisión de antecedentes.
            </p>
          </div>

          {/* Bloque 3 */}
          <div>
            <h3 className="text-xl font-bold text-very-dark-blue mb-4">
              Soporte <span className="text-light-blue">dedicado</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo está disponible para ayudarte todos los días, brindándote asistencia clara y ágil en cada paso del proceso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}