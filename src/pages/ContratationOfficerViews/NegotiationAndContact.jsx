import Button from "../../components/Button/Button";
import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";

export default function NegotiationAndContact() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-4 text-4xl md:text-5xl font-black text-very-dark-blue text-center pt-5">
                Negociación y <span className="text-light-blue">Contacto</span>
            </h2>
            <InteractiveChat />
            <div className="flex flex-row justify-between w-full mt-8 pb-10 gap-4">
                
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors">
                    Elegir otro trabajador
                </Button>
                
                {/* Botón Primario (Avanzar) */}
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-bold transition-colors shadow-md">
                    Siguiente
                </Button>
                
            </div>
        </div>
    )
}