import { useState } from "react";

export default function SelectionCalendarCard({ className = "" }) {
    // Replicamos la cuadrícula exacta de image_9.png
    // Diciembre 2025. Mes con 31 días. Empieza en lunes.
    // Selección: del D8 (lunes) al D13 (sábado). 8/13 son círculos, 9-12 rango.
    
    // Nombres de los días en inglés para coincidir con la imagen.
    const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    // Construimos explícitamente la cuadrícula de días para que sea idéntica.
    // 6 filas x 7 columnas.
    const calendarGridDays = [
        // Row 1
        { id: "p31", date: 31, type: 'prev' },
        { id: "c1", date: 1, type: 'current' },
        { id: "c2", date: 2, type: 'current' },
        { id: "c3", date: 3, type: 'current' },
        { id: "c4", date: 4, type: 'current' },
        { id: "c5", date: 5, type: 'current' },
        { id: "c6", date: 6, type: 'current' },
        // Row 2
        { id: "c7", date: 7, type: 'current' },
        { id: "c8", date: 8, type: 'current', isSelectStart: true },
        { id: "c9", date: 9, type: 'current', isSelectRange: true },
        { id: "c10", date: 10, type: 'current', isSelectRange: true },
        { id: "c11", date: 11, type: 'current', isSelectRange: true },
        { id: "c12", date: 12, type: 'current', isSelectRange: true },
        { id: "c13", date: 13, type: 'current', isSelectEnd: true },
        // Row 3
        { id: "c14", date: 14, type: 'current' },
        { id: "c15", date: 15, type: 'current' },
        { id: "c16", date: 16, type: 'current' },
        { id: "c17", date: 17, type: 'current' },
        { id: "c18", date: 18, type: 'current' },
        { id: "c19", date: 19, type: 'current' },
        { id: "c20", date: 20, type: 'current' },
        // Row 4
        { id: "c21", date: 21, type: 'current' },
        { id: "c22", date: 22, type: 'current' },
        { id: "c23", date: 23, type: 'current' },
        { id: "c24", date: 24, type: 'current' },
        { id: "c25", date: 25, type: 'current' },
        { id: "c26", date: 26, type: 'current' },
        { id: "c27", date: 27, type: 'current' },
        // Row 5
        { id: "c28", date: 28, type: 'current' },
        { id: "c29", date: 29, type: 'current' },
        { id: "c30", date: 30, type: 'current' },
        { id: "c31", date: 31, type: 'current' },
        { id: "n1", date: 1, type: 'next' },
        { id: "n2", date: 2, type: 'next' },
        { id: "n3", date: 3, type: 'next' },
    ];

    return (
        // CONTENEDOR PRINCIPAL: Tarjeta con bordes súper redondeados y sombra
        <div className={`w-full max-w-sm bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 p-8 ${className}`}>
            
            {/* 1. ENCABEZADO: Navegación con flechas y mes */}
            <div className="flex justify-between items-center mb-6 px-1">
                <div className="flex gap-2">
                    <button type="button" className="p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-colors font-bold text-xl leading-none">
                        «
                    </button>
                    <button type="button" className="p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-colors font-bold text-xl leading-none">
                        ‹
                    </button>
                </div>
                
                <h3 className="text-xl font-semibold text-very-dark-blue">
                    Diciembre 2025
                </h3>
                
                <div className="flex gap-2">
                    <button type="button" className="p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-colors font-bold text-xl leading-none">
                        ›
                    </button>
                    <button type="button" className="p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-xl transition-colors font-bold text-xl leading-none">
                        »
                    </button>
                </div>
            </div>

            {/* 2. DÍAS DE LA SEMANA */}
            <div className="grid grid-cols-7 gap-1 mb-3">
                {dayNames.map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-400 py-3">
                        {day}
                    </div>
                ))}
            </div>

            {/* 3. CUADRÍCULA DE DÍAS: Días del mes y selección */}
            <div className="grid grid-cols-7 gap-y-1 text-center relative">
                {/* TRUCO DE ARQUITECTO FRONTEND: Para que la selección del rango sea visualmente seamless (sin gaps horizontales), 
                  colocamos un div de fondo light blue *detrás* de la cuadrícula, que cubra exactamente el rango de D8 a D13.
                */}
                <div className="absolute inset-x-0 inset-y-0 h-full w-full px-1 py-1 z-0">
                  {/* Este div representa el fondo seamless del rango de la fila 2 */}
                  {/* Se ajusta con clases de posionamiento preciso */}
                  <div className="absolute top-[82px] left-[61px] right-[6px] h-[58px] bg-light-blue/20 rounded-full z-0"></div>
                </div>

                {calendarGridDays.map((dayObj, index) => {
                    // Clases básicas para cada celda
                    let cellClasses = "aspect-square flex items-center justify-center ";
                    let numberClasses = "w-[48px] h-[48px] flex items-center justify-center rounded-lg text-lg font-semibold transition-colors z-10 ";

                    // Color de texto: Gris para otros meses, Azul muy oscuro para el mes actual
                    if (dayObj.type === 'prev' || dayObj.type === 'next') {
                        numberClasses += "text-gray-300";
                    } else {
                        numberClasses += "text-very-dark-blue";
                    }

                    // Lógica de Selección y Rango
                    if (dayObj.isSelectStart || dayObj.isSelectEnd) {
                        // Inicio o Fin del rango: Círculo azul oscuro con número blanco
                        numberClasses += "bg-blue-buttons text-white rounded-full shadow-lg";
                    } else if (dayObj.isSelectRange) {
                        // Días dentro del rango: Número azul, fondo seamless por div externo
                        numberClasses += "rounded-none text-blue-buttons ";
                    }

                    return (
                        <div key={dayObj.id} className={cellClasses}>
                            <button
                                type="button"
                                className={numberClasses}
                            >
                                {dayObj.date}
                            </button>
                        </div>
                    );
                })}
            </div>
            
            {/* 4. FOOTER: Botones de Acción con texto en español */}
            <div className="flex gap-5 mt-10">
                <button 
                    type="button" 
                    className="flex-grow py-3 px-6 text-very-dark-blue bg-gray-100 hover:bg-gray-200 transition-colors rounded-[1rem] font-bold text-lg text-center"
                >
                    Eliminar todo
                </button>
                <button 
                    type="button" 
                    className="flex-grow py-3 px-6 text-white bg-blue-buttons hover:bg-dark-blue transition-colors rounded-[1rem] font-bold text-lg text-center shadow-xl hover:scale-105"
                >
                    Aplicar
                </button>
            </div>
            
        </div>
    );
}