import logo from '../../assets/logo.png';

// 1. Recibimos 'children' como propiedad
export default function Header({ children, className }) {
    return (
        // Pasamos la propiedad className para modificar estilos del Header
        // en otras vistas (pages)
        <header className={`flex items-center justify-between px-8 py-4 bg-white shadow-sm ${className}`}>
            
            {/* El Logo siempre será el mismo en todas las páginas */}
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
            </div>

            {/* 2. La navegación ahora es dinámica. Imprime lo que le pasemos */}
            <nav className="flex items-center gap-6">
                {children}
            </nav>

        </header>
    );
}