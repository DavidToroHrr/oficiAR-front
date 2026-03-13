// 1. Así se importa un CSS Module (le damos el nombre 'styles')

export default function Button({children, className=""}) {
    return (
        // 2. Así aplicamos la clase usando llaves {} en lugar de comillas
        <div>
            <button className={`bg-yellow text-very-dark-blue text-sm font-light px-6 py-2 rounded-full hover:scale-105 transition-transform ${className}`}>

            {children}

            </button>
        </div>
    )
}