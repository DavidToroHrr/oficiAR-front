import Button from "../../components/Button/Button";

export default function PaymentConfirmation() {
    return (
        <div>
            <h2 className="mb-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center">
                Resumen de tu <span className="text-light-blue">solicitud</span>
            </h2>

            <div className="flex flex-col items-center w-full max-w-[955px] mx-auto p-6 bg-white/70 rounded-2xl shadow-xl mb-10" >
                <h3 className="text-2xl font-bold mb-2 text-center text-very-dark-blue">
                    Detalles del servicio
                </h3>

                <div className="flex justify-between py-4 gap-4">
                    <h4>Tipo de servicio: </h4>
                    <p>Nombre del técnico</p>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <h4>Fecha y hora: </h4>
                    <p>Fecha y hora</p>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <h4>Lugar: </h4>
                    <p>Lugar</p>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <h4>Total importe: </h4>
                    <p>Precio</p>
                </div>
            </div>

            <div className="flex flex-row justify-between w-full mt-8 pb-10 gap-4">          
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors">
                    Regresar
                </Button>
                
                {/* Botón Primario (Avanzar) */}
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-bold transition-colors shadow-md">
                    Depositar y bloquear fondos
                </Button>
                
            </div>
        </div>
    )
}