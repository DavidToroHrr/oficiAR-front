import logo from '../../assets/logo.png';

export default function HeaderUserServices({ children }) {
    return (
        <header className="grid grid-cols-[1fr_auto_1fr] items-center px-8 py-4 bg-white shadow-sm">
            
            {/* COLUMNA 1: Logo centrado en su tercio */}
            <div className="flex items-center justify-center cursor-pointer">
                <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
            </div>

            {/* COLUMNA 2: Nav ocupa solo lo que necesita */}
            <nav className="flex items-center justify-center gap-6">
                {children}
            </nav>

            {/* COLUMNA 3: vacía para balance */}
            <div />

        </header>
    );
}