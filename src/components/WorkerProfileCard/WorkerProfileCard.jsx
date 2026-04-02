import React from "react";
// 1. Importamos tu botón (ajusta la ruta según dónde tengas guardado el componente)
import Button from "../Button/Button"; 

export default function WorkerProfileCard({ 
    imagenUrl, 
    nombre, 
    descripcion, 
    calificacion, 
    onSiguienteClick 
}) {
    return (
        <div className="w-full max-w-md bg-white rounded-[1rem] shadow-md border border-gray-100 p-5 flex gap-4 transition-shadow hover:shadow-lg">
            
            <img 
                src={imagenUrl} 
                alt={`Foto de perfil de ${nombre}`} 
                className="w-20 h-20 rounded-full object-cover shrink-0 border border-gray-200"
            />

            <div className="flex flex-col flex-1">
                
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {nombre}
                </h3>
                
                <p className="text-sm text-gray-600 mt-1 leading-snug">
                    {descripcion}
                </p>

                <div className="flex justify-between items-end mt-4">
                    
                    <div className="flex items-center gap-1.5 mb-1">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-400">{calificacion}</span>
                    </div>

                    {/* 2. AQUÍ USAMOS TU MOLDE DE BOTÓN */}
                    <Button 
                        onClick={onSiguienteClick}
                        // Pasamos por className los colores y bordes específicos para esta vista.
                        // Usamos bg-blue-buttons de tu paleta en lugar del color hexadecimal quemado.
                        className="bg-light-blue text-white rounded-lg font-semibold shadow-sm"
                        
                    >
                        Siguiente
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}