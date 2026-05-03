import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import ClickableLogo from '../ClickableLogo/ClickableLogo';
export default function Header({ children, className = "", navigateTo }) {
    // Estado para controlar si el cajón (drawer) está abierto o cerrado en móvil
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <header className={`flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm relative w-full ${className}`}>
            
            {/* 1. EL LOGO (Siempre visible) */}
            <ClickableLogo navigateTo={navigateTo} />

            {/* 2. NAVEGACIÓN DESKTOP (Oculta en celular, visible en PC/Tablet grande) */}
            <nav className="hidden md:flex items-center gap-6">
                {children}
            </nav>

            {/* 3. BOTÓN HAMBURGUESA (Visible en celular, oculto en PC) */}
            <button 
                className="md:hidden p-2 text-very-dark-blue focus:outline-none z-50"
                onClick={() => setIsDrawerOpen(true)}
            >
                {/* Icono de 3 líneas (Hamburguesa) usando un SVG nativo */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* 4. OVERLAY OSCURO (Fondo semitransparente cuando el drawer está abierto) */}
            {/* Si el usuario hace clic en lo oscuro, cerramos el menú */}
            {isDrawerOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsDrawerOpen(false)}
                />
            )}

            {/* 5. EL DRAWER (Menú lateral que desliza desde la derecha) */}
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

                {/* Navegación Móvil */}
                {/* Inyectamos los mismos "children", pero al poner flex-col se apilan verticalmente */}
                <nav className="flex flex-col gap-6 items-start w-full">
                    {children}
                </nav>
            </div>

        </header>
    );
}