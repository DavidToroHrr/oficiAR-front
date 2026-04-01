import logo from '../../assets/logo.png';

export default function HeaderUserServices({ children }) {
    return (
        <header className="flex items-center px-8 py-4 bg-white shadow-sm">
            
            {/* SECCIÓN IZQUIERDA — flex-1, logo con justify-center para centrarlo en su tercio */}
            <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center gap-2 cursor-pointer">
                    <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
                </div>
            </div>

            {/* SECCIÓN CENTRO — nav centrado */}
            <nav className="flex-1 flex items-center justify-center gap-6">
                {children}
            </nav>

            {/* SECCIÓN DERECHA — balance */}
            <div className="flex-1" />

        </header>
    );
}