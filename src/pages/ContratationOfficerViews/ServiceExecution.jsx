import Button from "../../components/Button/Button";
import WaitingSpinner from "../../components/WaitingSpinner/WaitingSpinner";

export default function PaymentRelease() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-12 mt-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center">
                Tu pago está <span className="text-light-blue">resguardado</span>
            </h2>
            <p className="text-center text-very-dark-blue text-lg mb-8">
                Mientras <span className="font-bold">Hernán J.</span> realiza el trabajo, tu dinero permanece seguro en nuestra plataforma.
            </p>
            <WaitingSpinner />
            <div className="flex flex-row justify-center w-full mt-8 pb-10 gap-4">
                
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors">
                    Volver al inicio
                </Button>
                
            </div>
        </div>
    )
}