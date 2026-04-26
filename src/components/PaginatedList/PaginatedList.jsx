import React, { useState, useEffect } from "react";

export default function PaginatedList({ 
    items, 
    itemsPerPage = 3, 
    renderItem,
    listClassName = "flex flex-col gap-4" 
}) {
    const [currentPage, setCurrentPage] = useState(1);

    // Si la lista cambia, volvemos a la página 1 por defecto
    useEffect(() => {
        setCurrentPage(1);
    }, [items]);

    if (!items || items.length === 0) return <p className="text-gray-500 text-center py-8">No hay elementos para mostrar.</p>;

    // 1. La Matemática Interna
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    // 2. Funciones de control (sin el auto-scroll de la página principal)
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    // Generamos el arreglo de números [1, 2, 3...]
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="w-full flex flex-col items-center">
            
            {/* --- ZONA DE RENDERIZADO DE LA LISTA --- */}
            <div className={`w-full ${listClassName}`}>
                {currentItems.map((item, index) => renderItem(item, index))}
            </div>

            {/* --- ZONA DE LOS BOTONES DE PAGINACIÓN --- */}
            {totalPages > 1 && (
                // ELIMINAMOS flex-col. AHORA SIEMPRE ES UNA FILA (flex-row)
                // Usamos gap-2 en móvil y gap-4 en pantallas grandes (sm:gap-4)
                <div className="flex justify-center items-center gap-2 sm:gap-4 mt-12 w-full">
                    
                    {/* BOTÓN ANTERIOR */}
                    <button 
                        onClick={handlePrev} 
                        disabled={currentPage === 1} 
                        // Reducimos padding y texto en móvil (px-3 py-2 text-sm) y lo restauramos en PC (sm:px-5 sm:py-2.5 sm:text-base)
                        className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 
                                   bg-white border border-gray-200 text-very-dark-blue hover:bg-gray-50 
                                   disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed shadow-sm"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        Anterior
                    </button>

                    {/* NÚMEROS DE PÁGINA (Visible en Desktop) */}
                    <div className="hidden sm:flex items-center gap-2">
                        {pages.map(page => (
                            <button
                                key={page}
                                onClick={() => {
                                    setCurrentPage(page);
                                }}
                                className={`w-10 h-10 rounded-xl font-bold transition-colors duration-200 flex items-center justify-center
                                    ${currentPage === page
                                        ? "bg-light-blue text-white shadow-md scale-105" 
                                        : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-very-dark-blue"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    {/* INDICADOR MÓVIL (Visible solo en Celulares) */}
                    {/* Agregamos whitespace-nowrap para que no se divida en dos líneas */}
                    <span className="sm:hidden text-xs sm:text-sm font-medium text-gray-500 whitespace-nowrap">
                        Pág {currentPage} de {totalPages}
                    </span>

                    {/* BOTÓN SIGUIENTE */}
                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === totalPages} 
                        className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 
                                   bg-light-blue text-white hover:bg-blue-buttons 
                                   disabled:opacity-40 disabled:hover:bg-light-blue disabled:cursor-not-allowed shadow-md"
                    >
                        Siguiente
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                    
                </div>
            )}
        </div>
    );
}