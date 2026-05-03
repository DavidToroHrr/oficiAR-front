import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function NegotiationAndContact() {
    const { goBack, goNext } = useFormNavigation();

    
    const chatMessages = [
        { id: 1, text: "¿Tiene disponibilidad para el próximo miércoles?", sender: "them", time: "7:20" },
        { id: 2, text: "Cuento con disponibilidad a las 9am.", sender: "me", time: "7:20" },
        { id: 3, text: "Perfecto, queda agendado para el miércoles a las 9 am", sender: "them", time: "7:20" },
        { id: 4, text: "¡Muchas gracias!", sender: "me", time: "7:20" }
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Se refactoriza el tamaño con Typography */}
            <Typography variant="h1" className="text-center pt-5 mb-4">
                Negociación y <span className="text-light-blue">Contacto</span>
            </Typography>

            <InteractiveChat initialMessages={chatMessages}/>
            <div className="flex flex-row justify-between w-full mt-8 pb-10 gap-4">
                
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors"
                onClick={goBack}>
                    Elegir otro trabajador
                </Button>
                
                {/* Botón Primario (Avanzar) */}
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-bold transition-colors shadow-md"
                onClick={()=>goNext("/client-flow/payment-confirmation")}>
                    Siguiente
                </Button>
                
            </div>
        </div>
    )
}