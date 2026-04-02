import logo from '../../assets/logo.png';

export default function HeaderUserServices({ children }) {
    return (

        <header className=" items-center py-4 bg-white shadow-sm px-4 xl:px-24 lg:px-16">
            
            <div className="flex items-center justify-between ">
                {/* COLUMNA 1: Logo centrado en su tercio */}
                <div className="flex items-center justify-center cursor-pointer">
                    <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
                </div>

                {/* COLUMNA 2: Nav ocupa solo lo que necesita */}
                <nav className="flex items-center justify-center">
                    {children}
                </nav>

            </div>
            
            

            
                



        </header>
    );
}