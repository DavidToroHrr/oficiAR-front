import ImgOfficer from "../../assets/officer.png"

export default function HowItWorks() { 
    return (
        <section className="bg-light-blue py-16 px-4">
            {/* 1. EL CONTENEDOR PADRE: flex-row pone la tarjeta y la imagen lado a lado */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">

                {/* --- LA TARJETA BLANCA (Adelante) --- */}
                {/* z-10 la trae hacia adelante. relative es necesario para que z-10 funcione */}
                <div className="relative z-10 flex flex-col justify-center bg-very-ligth-gray w-full max-w-[610px] rounded-[2rem] p-10 shadow-2xl">
                    <h2 className="text-4xl font-extrabold mb-10">
                        ¿Cómo funciona? 
                    </h2>

                    {/* Paso 1 (Cambié items-center por items-start para que la bolita no se baje si el texto es largo) */}
                    <div className="flex items-start mb-8">
                        <div className="flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-full text-white font-bold text-2xl shrink-0 mt-1">
                            1
                        </div>
                        <div className="ml-6 max-w-sm">
                            <p className="text-gray-800 leading-relaxed">
                                Encuentra al profesional que necesitas. Revisa sus calificaciones y trabajos anteriores registrados en la blockchain, asegurando que cada reseña es auténtica e inalterable.
                            </p>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="flex items-start mb-8">
                        <div className="flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-full text-white font-bold text-2xl shrink-0 mt-1">
                            2
                        </div>
                        <div className="ml-6 max-w-sm">
                            <p className="text-gray-800 leading-relaxed">
                                Una vez acordado el presupuesto, los fondos se resguardan. El dinero no se libera hasta que ambos confirmen que el trabajo se completó.
                            </p>
                        </div>   
                    </div>

                    {/* Paso 3 */}
                    <div className="flex items-start">
                        <div className="flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-full text-white font-bold text-2xl shrink-0 mt-1">
                            3
                        </div>
                        <div className="ml-6 max-w-sm">
                            <p className="text-gray-800 leading-relaxed">
                                Confirma en la app para liberar el pago al profesional. Tu calificación del servicio se graba de forma permanente, ayudando a toda la comunidad.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- LA IMAGEN (Atrás) --- */}
                {/* z-0 la empuja hacia atrás. -ml-32 (margen izquierdo negativo) la jala debajo de la tarjeta blanca */}
                <div className="relative z-0 hidden lg:block -ml-32">
                    <img 
                        src={ImgOfficer} 
                        alt="Oficial de OficiAR" 
                        className="w-[600px] h-[550px] object-cover rounded-3xl shadow-xl" 
                    />
                </div>

            </div>
        </section>
    )
}