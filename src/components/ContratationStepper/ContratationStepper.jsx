import { useLocation } from 'react-router-dom';

const pasos = [
  { id: 1, label: "Especificación del problema" },
  { id: 2, label: "Selección del Officer" },
  { id: 3, label: "Negociación y contacto" },
  { id: 4, label: "Confirmación y Pago" },
  { id: 5, label: "Ejecución del servicio" },
  { id: 6, label: "Confirmación del pago"}
];

export default function ContratationStepper() {
  const location = useLocation();
  const path = location.pathname;

  let pasoActivo = 1; 
  if (path.includes('client-flow/problem-specification')) pasoActivo = 1;
  else if (path.includes('client-flow/officer-selection')) pasoActivo = 2;
  else if (path.includes('client-flow/negotiation-and-contact')) pasoActivo = 3;
  else if (path.includes('client-flow/payment-confirmation')) pasoActivo = 4;
  else if (path.includes('client-flow/service-execution')) pasoActivo = 5;
  else if (path.includes('client-flow/payment-release')) pasoActivo = 6;
  
  // Fórmula corregida: Dividimos entre (totalPasos - 1) y multiplicamos por 100 para sacar el % exacto
  const progreso = ((pasoActivo - 1) / 5) * 100;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 md:mt-2">
      <div className="relative flex justify-between items-start">
        
        {/* LÍNEAS DE FONDO (Ajustamos el top para que quede centrado en las bolitas en ambas pantallas) */}
        <div className="absolute left-0 top-4 md:top-6 w-full h-1 bg-gray-300 -z-10"></div>
        <div 
          className="absolute left-0 top-4 md:top-6 h-1 bg-light-blue -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${progreso}%` }}
        ></div>

        {/* DIBUJAMOS LOS PASOS DINÁMICAMENTE */}
        {pasos.map((paso) => {
          let circleClasses = "";
          let textClasses = "";

          if (paso.id === pasoActivo) {
            circleClasses = "bg-light-blue border-white ring-2 ring-light-blue text-white scale-110";
            textClasses = "font-bold text-gray-900";
          } else if (paso.id < pasoActivo) {
            circleClasses = "bg-light-blue border-light-blue text-white";
            textClasses = "font-bold text-gray-900";
          } else if (paso.id === pasoActivo + 1) {
            circleClasses = "bg-very-dark-blue border-very-dark-blue text-white";
            textClasses = "font-semibold text-very-dark-blue";
          } else {
            circleClasses = "bg-dark-gray border-dark-gray text-white";
            textClasses = "font-normal text-dark-gray";
          }

          return (
            // flex-1 asegura que se distribuyan equitativamente en toda la pantalla
            <div key={paso.id} className="flex flex-col items-center relative z-10 flex-1 md:flex-none md:w-28">
              
              {/* LA BOLITA: Más pequeña en celular (w-8 h-8), tamaño normal en PC (md:w-12 md:h-12) */}
              <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 flex items-center justify-center font-bold text-sm md:text-lg mb-1 md:mb-2 transition-all duration-500 ${circleClasses}`}>
                {paso.id}
              </div>
              
              {/* EL TEXTO: Oculto en celular (hidden), visible en PC (md:block) */}
              <span className={`hidden md:block text-center text-sm transition-colors duration-500 leading-tight px-1 ${textClasses}`}>
                {paso.label}
              </span>
              
            </div>
          );
        })}

      </div>
    </div>
  );
}