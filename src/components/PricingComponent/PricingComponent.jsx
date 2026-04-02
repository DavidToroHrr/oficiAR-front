// 1. Importas tu componente Button (Ajusta la ruta según tu estructura de carpetas)
import Button from "../../components/Button/Button";
import pricingImg from "../../assets/pricing.png";

export default function PricingSection() {
    return (
        <div className="relative flex flex-col min-h-screen">
            
            {/* FONDO GLOBAL */}
            <img 
                src={pricingImg} 
                alt="Fondo de precios" 
                className="absolute inset-0 w-full h-full object-cover -z-20 fixed"
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10 fixed"></div>

            {/* CONTENIDO FLOTANTE */}
            <div className="relative z-10 flex flex-col flex-grow items-center justify-center p-4 mx-auto w-full">
                
                {/* TARJETA */}
                <div className="flex flex-col p-10 mx-auto w-full max-w-[550px] text-center text-gray-900 bg-white/85 backdrop-blur-md rounded-[0.5rem] shadow-2xl border border-white/60">
                    
                    <h2 className="mb-2 text-4xl font-extrabold text-black">
                        Plan Socio Pro Anual
                    </h2>
                    
                    <p className="font-medium text-gray-500 text-lg mb-8">
                        ¡Acceso ilimitado a todos los servicios por un año!
                    </p>
                    
                    <div className="flex justify-center items-baseline mb-2">
                        <span className="mr-2 text-5xl font-extrabold text-black">$450.000</span>
                        <span className="text-2xl font-bold text-gray-700">COP</span>
                    </div>
                    
                    <p className="text-sm font-medium text-gray-500 mb-6">
                        Pago único por 12 meses (equivalente a 37.500 / mes)
                    </p>

                    <hr className="border-gray-300 mb-8" />
                    
                    <h3 className="mb-6 text-xl font-bold text-left text-black">
                        Beneficios exclusivos:
                    </h3>
                    
                    <ul role="list" className="mb-10 space-y-5 text-left">
                        {/* ITEM 1 */}
                        <li className="flex items-center space-x-4">
                            <svg className="flex-shrink-0 w-7 h-7 text-blue-buttons" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold text-gray-700 text-lg">Acceso prioritario a solicitudes</span>
                        </li>
                        
                        {/* ITEM 2 */}
                        <li className="flex items-center space-x-4">
                            <svg className="flex-shrink-0 w-7 h-7 text-light-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold text-gray-700 text-lg">Tarifas preferenciales</span>
                        </li>
                        
                        {/* ITEM 3 */}
                        <li className="flex items-center space-x-4">
                            <svg className="flex-shrink-0 w-7 h-7 text-light-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold text-gray-700 text-lg">Herramientas de gestión avanzadas</span>
                        </li>
                    </ul>
                    
                    {/* 2. AQUÍ USAMOS TU COMPONENTE <Button> */}
                    <div className="flex w-full justify-center mt-auto">
                        <div className="flex w-full justify-center mt-auto">
                <Button 
                    type="button" 
                    className="w-full max-w-[460px] text-white bg-light-blue font-bold rounded-xl text-lg sm:text-xl px-5 py-4 shadow-lg"
                    onClick={() => console.log("Redirigiendo a pagar...")}
                >
                    Activar Suscripción Anual
                </Button>
                </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}