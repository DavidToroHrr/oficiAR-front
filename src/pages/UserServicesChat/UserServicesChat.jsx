import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import Background from "../../assets/chat-background.png";
import Typography from "../../components/Typography/Typography";
import useFormNavigation from "../../hooks/useFormNavigation";

export default function UserServicesChat() {
    const chatConCliente = [
        { id: 1, text: "¿Tienes disponibilidad el próximo miércoles?", sender: "them", time: "14:30" },
        { id: 2, text: "Cuento con disponibilidad a las 9 am", sender: "me", time: "14:32" },
        { id: 3, text: "Perfecto, queda agendado para el miércoles a las 9 am", sender: "them", time: "14:33" },
        { id: 4, text: "¡Muchas gracias!", sender: "me", time: "14:35" }
    ];

    const { goBack } = useFormNavigation();

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
                    className="text-center pt-5"
                >
                    ¡Tu solicitud está en <span className="text-light-blue">marcha</span>!
                </Typography>

                <Typography 
                    variant="body" 
                    className="mx-15 text-center mb-5"
                >
                    Pronto, técnicos certificados se pondrán en contacto contigo por este chat para establecer la negociación, 
                    confirmar detalles como los horarios de los días elegidos y acordar el precio final.
                </Typography>

                <InteractiveChat initialMessages={chatConCliente}/>

            </div>

            {/* self-end se pone a flotar a la derecha ignorando el flex del contenedor padre */}
           <Button 
                className="bg-light-blue text-white px-8 py-2.5 rounded-[8px] font-bold shadow-md mt-8 self-start ml-20 mb-10 w-[180px] h-[71px] text-[20px] flex items-center justify-center"
                onClick={() => goBack()}
            >
                Regresar
            </Button>
        </div>
    )
}