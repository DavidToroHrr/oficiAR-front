import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import Background from "../../assets/chat-background.png";
import Typography from "../../components/Typography/Typography";
import useFormNavigation from "../../hooks/useFormNavigation";

export default function ServicesHistoryChat() {
const { goNext,goBack } = useFormNavigation();

    const chatConCliente = [
        { id: 1, text: "Hola Jacobo, ¿cómo estás?", sender: "them", time: "14:30" },
        { id: 2, text: "Hola, es un gusto hablar contigo. Cuéntame, ¿Qué necesidad tienes?", sender: "me", time: "14:32" },
        { id: 3, text: "Necesito un servicio para arreglar mi tubería rota", sender: "them", time: "14:33" },
        { id: 4, text: "Perfecto, en ese caso te comunicaste con la persona indicada", sender: "me", time: "14:35" }
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
                    onClick={() => goNext("/client-service-requests")}
                />

                <Typography variant="h2" className="mb-4 text-center pt-5">
                    En unos breves instantes el cliente <br/> se pondrá en contacto contigo
                </Typography>

                <InteractiveChat initialMessages={chatConCliente}/>

            </div>

            {/* self-end se pone a flotar a la derecha ignorando el flex del contenedor padre */}
              <Button 
                className="bg-light-blue text-white px-8 py-2.5 rounded-[8px] font-bold shadow-md mt-8 self-end mr-20 mb-10 w-[180px] h-[71px] text-[20px] flex items-center justify-center"
                onClick={() => goBack()}
            >
                Volver a <br/> Solicitudes
            </Button>
        </div>
    )
}