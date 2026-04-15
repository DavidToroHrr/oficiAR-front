import { FiCheckCircle, FiHeadphones, FiXCircle } from "react-icons/fi";

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
                
                <h3 className="font-bold text-black text-base">{clientName}</h3>
                <div className="mb-2">
                    <p className="font-light text-black text-[13px] mt-1">Solicitud: {requestType}</p>
                    <p className="font-light text-black text-[13px]">Fecha: {date}</p>
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