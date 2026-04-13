import InteractiveChat from "../../components/InteractiveChat/InteractiveChat";
import Logo from "../../assets/logo.png";
import Button from "../../components/Button/Button";
import Background from "../../assets/chat-background.png";

export default function PaymentReleaseChat() {
    const chatConCliente = [
        { id: 1, text: "Hola worker, ¿en qué te puedo ayudar?", sender: "them", time: "14:30" },
        { id: 2, text: "Hola Jacobo, gracias por responder, ¿Cuándo se verá reflejado mi pago?", sender: "me", time: "14:32" },
        { id: 3, text: "Ya te lo liberé, ¿Te llegó?", sender: "them", time: "14:33" },
        { id: 4, text: "Sí, ¡Muchas gracias!", sender: "me", time: "14:35" }
    ];

    return (
        <div 
            style={{ backgroundImage: `url(${Background})` }}
            className="bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col"
        >

            <div className="flex flex-col items-center gap-15">
                <img src={Logo} className="w-[247px] h-[55px] mt-5" />

                <h2 className="mb-4 text-4xl md:text-[25px] font-extrabold text-center pt-5">
                    En unos breves instates el cliente <br/> se pondrá en contacto contigo
                </h2>

                <InteractiveChat initialMessages={chatConCliente}/>

            </div>

            {/* Agregamos justify-between para mandar uno a cada lado */}
            {/* Agregamos w-full para que el contenedor use todo el ancho disponible */}
            {/* px-4 para celular (margen pequeño a los lados)
                md:px-20 para PC (recuperamos el margen de 80px)
                gap-4 para que NUNCA se toquen, sin importar qué tan pequeña sea la pantalla */}
            <div className="flex flex-row justify-between w-full px-4 md:px-20 mt-8 mb-10 gap-4">
                
                <Button className="bg-light-blue text-white rounded-[8px] font-bold shadow-md 
                                w-full max-w-[150px] md:max-w-[180px] 
                                h-[50px] md:h-[71px] 
                                text-sm md:text-[20px] 
                                flex items-center justify-center">
                    Regresar
                </Button>

                {/* Se agregó leading-tight para que el salto de línea (<br/>) no separe tanto el texto */}
                <Button className="bg-light-blue text-white rounded-[8px] font-bold shadow-md 
                                w-full max-w-[150px] md:max-w-[180px] 
                                h-[50px] md:h-[71px] 
                                text-sm md:text-[20px] leading-tight
                                flex items-center justify-center text-center">
                    Volver al <br/> historial
                </Button>
                
            </div>
        </div>
    )
}