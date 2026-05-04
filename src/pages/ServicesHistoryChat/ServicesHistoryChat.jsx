import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import Background from "../../assets/chat-background.png";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function ServicesHistoryChat() {

    const { goBack } = useFormNavigation();

    const chatConCliente = [
        { id: 1, text: "Hola worker, ¿en qué te puedo ayudar?", sender: "them", time: "14:30" },
        { id: 2, text: "Hola, ¿me puedes indicar tu dirección de residencia? Por favor", sender: "me", time: "14:32" },
        { id: 3, text: "Cra 9 N # ** - **", sender: "them", time: "14:33" },
        { id: 4, text: "¡Muchas gracias! Llegaré el día y la hora acordados", sender: "me", time: "14:35" }
    ];

    return (
        <div 
            style={{ backgroundImage: `url(${Background})` }}
            className="bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col"
        >

            <div className="flex flex-col items-center gap-15">
                <img 
                src={Logo} 
                className="w-[247px] h-[55px] mt-5 cursor-pointer" 
                onClick={() => goBack()}
                />

                <Typography 
                    variant="h2" 
                    className="mb-4 text-center pt-5"
                >
                    En unos breves instantes el cliente <br/> se pondrá en contacto contigo
                </Typography>

                <InteractiveChat initialMessages={chatConCliente}/>

            </div>

            {/* self-end se pone a flotar a la derecha ignorando el flex del contenedor padre */}
            <Button 
                className="bg-light-blue text-white px-8 py-2.5 rounded-[8px] font-bold shadow-md mt-8 self-end mr-20 mb-10 w-[180px] h-[71px] text-[20px] flex items-center justify-center"
                onClick={() => goBack()}
            >
                <Typography variant="body" className="font-bold text-white leading-tight text-center">
                    Volver al <br/> historial
                </Typography>
            </Button>
            
        </div>
    )
}