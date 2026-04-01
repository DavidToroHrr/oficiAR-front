import React from "react";

export default function WaitingSpinner() {
    return (
        // El w-32 h-32 le da ese tamaño grande y elegante que tienes en Figma.
        // text-blue-buttons inyecta tu variable de color en el SVG.
        <svg 
            className="w-32 h-32 md:w-40 md:h-40 animate-spin text-blue-buttons" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* 1. La pista delgada de fondo */}
            <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="opacity-30"
            />
            {/* 2. El arco grueso que gira */}
            {/* strokeLinecap="round" es el truco para que las puntas se vean como "píldoras" */}
            <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeDasharray="251" 
                strokeDashoffset="160" 
            />
        </svg>
    );
}