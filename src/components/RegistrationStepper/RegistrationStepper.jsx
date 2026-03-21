import { useLocation } from 'react-router-dom';

// 1. Definimos los pasos en un arreglo para mantener el código limpio
const pasos = [
  { id: 1, label: "Carga de fotos" },
  { id: 2, label: "Oficio" },
  { id: 3, label: "Certificaciones" },
  { id: 4, label: "Datos Bancarios" }
];

export default function RegistrationStepper() {
  const location = useLocation();
  const path = location.pathname;

  // Identificamos el paso actual
  let pasoActivo = 1; 
  if (path.includes('validation-identity')) pasoActivo = 1;
  else if (path.includes('office-specification')) pasoActivo = 2;
  else if (path.includes('certifications')) pasoActivo = 3;
  else if (path.includes('bank-account')) pasoActivo = 4;

  const progreso = ((pasoActivo - 1) / 4) * 130;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-2">
      <div className="relative flex justify-between items-start">
        
        {/* LÍNEAS DE FONDO */}
        <div className="absolute left-0 top-6 w-full h-1 bg-gray-300 -z-10"></div>
        <div 
          className="absolute left-0 top-6 h-1 bg-blue-500 -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${progreso}%` }}
        ></div>

        {/* 2. DIBUJAMOS LOS PASOS DINÁMICAMENTE */}
        {pasos.map((paso) => {
          // Variables para guardar los colores de cada estado
          let circleClasses = "";
          let textClasses = "";

          // MÁQUINA DE ESTADOS:
          if (paso.id === pasoActivo) {
            // ESTADO 1: Paso Actual (Azul con franja blanca y anillo)
            circleClasses = "bg-light-blue border-white ring-2 ring-light-blue text-white";
            textClasses = "font-bold text-gray-900";
            
          } else if (paso.id < pasoActivo) {
            // ESTADO 2: Pasos Completados (Totalmente azules)
            // Usamos border-blue-500 para que el borde se camufle y no haya franja blanca
            circleClasses = "bg-light-blue border-light-blue text-white";
            textClasses = "font-bold text-gray-900";

          } else if (paso.id === pasoActivo + 1) {
            // ESTADO 3: El paso Inmediatamente Siguiente (Azul oscuro)
            circleClasses = "bg-very-dark-blue border-very-dark-blue text-white";
            textClasses = "font-semibold text-very-dark-blue";

          } else {
            // ESTADO 4: Los pasos Restantes (Grises)
            circleClasses = "bg-dark-gray border-dark-gray text-white";
            textClasses = "font-normal text-dark-gray";
          }

          return (
            <div key={paso.id} className="flex flex-col items-center relative z-10 w-28">
              {/* La Bolita */}
              <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-lg mb-2 transition-all duration-500 ${circleClasses}`}>
                {paso.id}
              </div>
              
              {/* El Texto */}
              <span className={`text-center text-sm transition-colors duration-500 ${textClasses}`}>
                {paso.label}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}