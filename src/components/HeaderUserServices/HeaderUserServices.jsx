import logo from '../../assets/logo.png';

export default function HeaderUserServices({ children }) {
    return (
        <header className="relative flex items-center pl-80 py-4 bg-white shadow-sm">
            
            {/* Logo posicionado según Figma */}
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
            </div>

            {/* Navegación centrada con gap-6 igual que el Header original */}
            <nav className="absolute left-[55%] -translate-x-1/2 flex items-center gap-6">
                {children}
            </nav>

        </header>
    );
}