import React, { useState } from "react";
import logo from '../../assets/logo.svg';
export default function HeaderUserServices({ children }) {
    // 1. Estado para controlar el cajón (drawer)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header className="py-4 bg-white shadow-sm px-4 xl:px-24 lg:px-16 relative w-full">
            
            {/* Contenedor principal: Mantenemos 'justify-between' para separar Logo e Ícono */}
            <div className="flex items-center justify-between w-full">
                
                {/* 1. EL LOGO (Visible en ambas vistas) */}
                <div className="flex items-center justify-center cursor-pointer z-50 ml-4 md:ml-0">
                    <img src={logo} alt="OficiAR Logo" className="h-5 w-auto object-cover object-center scale-150" />
                </div>

                {/* 2. NAVEGACIÓN DESKTOP (Oculta en celular, visible en md) */}
                <nav className="hidden md:flex items-center justify-center gap-6">
                    {children}
                </nav>

                {/* 3. BOTÓN HAMBURGUESA (Solo visible en celular) */}
                <button 
                    className="md:hidden p-2 text-very-dark-blue focus:outline-none z-50"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>

            {/* 4. OVERLAY OSCURO (Fondo semitransparente) */}
            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* 5. EL DRAWER (Menú lateral que desliza) */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Botón de Cerrar (X) */}
                <div className="flex justify-end mb-8">
                    <button 
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 text-gray-500 hover:text-very-dark-blue transition-colors focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navegación Móvil (Apilada verticalmente) */}
                <nav className="flex flex-col gap-6 items-start w-full">
                    {children}
                </nav>
            </div>

        </header>
    );
}