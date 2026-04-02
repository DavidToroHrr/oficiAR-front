import { useState } from "react";

// Agregamos onSelect para poder avisarle al padre qué eligió el usuario
export default function Dropdown({ options = [], label = "Seleccionar...", onSelect }) {
    
    const [isOpen, setIsOpen] = useState(false);
    // Nuevo estado para guardar la opción que eligió el usuario
    const [selectedOption, setSelectedOption] = useState(null);

    // Función que se ejecuta cuando tocan un <li>
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Actualiza el texto del botón
        setIsOpen(false); // Cierra el menú desplegable
        if (onSelect) onSelect(option); // Le avisa al padre (SpecificationOfficer)
    };

    return (
        <div className="relative inline-block text-left w-full max-w-[290px]">
            
            {/* EL BOTÓN */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                // Cambié un poco las clases para que ocupe el ancho completo (w-full) y separe el texto de la flecha (justify-between)
                className="inline-flex items-center justify-between w-full text-very-dark-blue bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors" 
                type="button"
            >
                {/* Si ya eligió algo, muestra esa etiqueta. Si no, muestra el label por defecto */}
                {selectedOption ? selectedOption.label : label} 
                
                <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
            </button>

            {/* EL MENÚ DESPLEGABLE */}
            {isOpen && (
                <div className="absolute z-10 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-full">
                    <ul className="p-2 text-sm text-very-dark-blue font-medium">
                        
                        {/* LA MAGIA: Mapeamos el arreglo de opciones */}
                        {options.map((option, index) => (
                            <li key={index}>
                                <button 
                                    type="button"
                                    // Al hacer clic, disparamos nuestra función interna
                                    onClick={() => handleOptionClick(option)}
                                    className="inline-flex items-center w-full p-2 hover:bg-very-light-gray rounded transition-colors text-left"
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            )}
            
        </div>
    );
}