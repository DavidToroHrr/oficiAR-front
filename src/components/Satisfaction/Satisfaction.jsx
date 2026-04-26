import Typography from "../Typography/Typography";

export default function Satisfaction() {
  return (
    // section es semánticamente mejor que un div para un bloque grande de contenido
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Grilla: 1 columna en celular, 3 en pantallas medianas/grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Bloque 1 */}
          <div>
            <Typography variant="h3" className="mb-4">
              Garantía de <span className="text-light-blue">satisfacción</span>
            </Typography>
            <Typography variant="body">
              Si el servicio no cumple tus expectativas, trabajaremos contigo para solucionarlo y asegurarnos de que quedes conforme.
            </Typography>
          </div>

          {/* Bloque 2 */}
          <div>
            <Typography variant="h3" className="mb-4">
              Profesionales <span className="text-light-blue">verificados</span>
            </Typography>
            <Typography variant="body">
              Antes de formar parte de OficiAR, cada prestador pasa por un proceso de validación de identidad y revisión de antecedentes.
            </Typography>
          </div>

          {/* Bloque 3 */}
          <div>
            <Typography variant="h3" className="mb-4">
              Soporte <span className="text-light-blue">dedicado</span>
            </Typography>
            <Typography variant="body">
              Nuestro equipo está disponible para ayudarte todos los días, brindándote asistencia clara y ágil en cada paso del proceso.
            </Typography>
          </div>

        </div>
      </div>
    </section>
  );
}