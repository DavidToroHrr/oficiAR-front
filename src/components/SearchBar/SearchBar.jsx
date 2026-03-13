export default function SearchBar(){
    {/* Contenedor principal centrado y con ancho máximo */}

    return(
    <div className="mt-10 max-w-xl mx-auto">
    
    {/* El label ahora usa htmlFor */}
    <label htmlFor="Search" className="relative block">
        
        {/* Ocultamos el texto "Search" visualmente (sr-only), pero lo dejamos para lectores de pantalla (Accesibilidad) */}
        <span className="sr-only"> Buscar </span>

        {/* El input con tus colores, placeholder y bordes redondeados (rounded-full) */}
        <input 
        type="text" 
        id="Search" 
        placeholder="¿Con qué necesitas ayuda?"
        className="w-full rounded-full border-2 border-light-blue py-3 px-6 pe-12 shadow-sm text-very-dark-blue outline-none placeholder:text-gray-400" 
        />

        {/* La Lupa posicionada de forma absoluta a la derecha */}
        <span className="absolute inset-y-0 right-2 grid place-content-center">
        <button 
            type="button" 
            aria-label="Submit" 
            className="rounded-full p-2 text-light-blue transition-colors hover:text-dark-blue hover:scale-110"
        >
            {/* El SVG con las propiedades en camelCase */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
        </button>
        </span>
        
    </label>
    </div>);
}