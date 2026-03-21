export default function Button({children, className="", onClick, type = "button"}) {
    return (
        // 1. Así aplicamos la clase usando llaves {} en lugar de comillas
        <div>
            {/* bg-yellow y text-very-dark-blue: Definen el color de fondo 
            (amarillo) y del texto (azul muy oscuro)  */}
            {/* /* text-sm font-light: Hacen que el texto sea pequeño y con un 
            grosor de fuente delgado */}
            {/* /* px-6 py-2: Añaden el espacio de relleno interior (padding). px-6 
            da espacio a los lados (eje X), y py-2 arriba y abajo (eje Y) */}
            { /* rounded-full: Hace que los bordes del botón sean completamente 
            redondeados, dándole forma de píldora */}
            {/* hover:scale-105 transition-transform: Esto añade interactividad. 
            Cuando el usuario (ya sea el cliente o el trabajador) pase el cursor 
            sobre el botón (hover), este crecerá un 5% (scale-105) de forma suave 
            y fluida (transition-transform) */}
            {/* ${className}: Permite que, si se llama al botón en otra 
            vista y se necesita darle un margen extra o un ancho específico, se pueda 
            pasarle esa clase adicional y se sume a los estilos base */ }
            <button className={`text-sm px-6 py-2 hover:scale-105 transition-transform ${className}`} onClick={onClick}
            type={type}
            >

            {children}

            </button>
        </div>
    )
}
