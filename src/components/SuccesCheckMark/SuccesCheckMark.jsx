import React from "react";

export default function SuccessCheckmark({ className = "" }) {
    return (
        <svg 
            // Subimos la escala a w-32 h-32 para que destaque más
            className={`w-32 h-32 text-light-blue animate-pulse ${className}`} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M20 50L40 70L80 30" 
                stroke="currentColor" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
}