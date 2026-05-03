import { FiCheckCircle, FiHeadphones, FiXCircle } from "react-icons/fi";
import Typography from "../Typography/Typography";

export default function ClientRequestCard({clientName, requestType, date, imageUrl}) {
    return (
        <div className="bg-white rounded-[8px] p-3 flex flex-row items-center gap-5 w-full max-w-[400px] shadow-sm">
        
            {/* Sección de imagen (Izquierda) */}
            <div className="w-[100px] h-[100px] flex-shrink-0">
                <img 
                src={imageUrl} 
                alt={`Servicio de ${clientName}`} 
                className="w-full h-full object-cover rounded-[8px]"
                />
            </div>

            {/* Sección de contenido (Derecha) */}
            <div className="flex flex-col flex-grow justify-center gap-2">
                
                <Typography variant="h3">
                    {clientName}
                </Typography>
                
                <div className="mb-2">
                    <Typography variant="small" className="mt-1">
                        Solicitud: <span className="font-medium text-very-dark-blue">{requestType}</span>
                    </Typography>

                    <Typography variant="small">
                        Fecha: <span className="font-medium text-very-dark-blue">{date}</span>
                    </Typography>
                </div>

                {/* Sección de botones con forma de íconos */}
                <div className="flex flex-row justify-between w-full">
                
                    {/* Botón Aceptar (Azul) */}
                    <button className="text-light-blue hover:scale-110 transition-transform">
                        {/* El ícono ahora es un componente. Le pasamos el tamaño con className */}
                        <FiCheckCircle className="w-8 h-8" />
                    </button>

                    {/* Botón Soporte / Chat (Gris) */}
                    <button className="text-light-gray hover:scale-110 transition-transform">
                        <FiHeadphones className="w-8 h-8" />
                    </button>

                    {/* Botón Rechazar (Rojo) */}
                    <button className="text-red hover:scale-110 transition-transform">
                        <FiXCircle className="w-8 h-8" />
                    </button>

                </div>
            </div>

        </div>
    );
}