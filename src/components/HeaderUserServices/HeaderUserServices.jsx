import logo from '../../assets/logo.png';

export default function HeaderUserServices({ children }) {
    return (
        <header className="py-4 bg-white shadow-sm px-4 xl:px-24 lg:px-16">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
                
                {/* Logo — arriba en móvil, izquierda en desktop */}
                <div className="flex items-center justify-center cursor-pointer">
                    <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
                </div>

                {/* Nav — debajo del logo en móvil, derecha en desktop */}
                <nav className="flex items-center justify-center gap-6">
                    {children}
                </nav>

            </div>

        </header>
    );
}