import OfficerImage from "../OfficerImage/OfficerImage";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";
import ChatBubbleIcon from "../ChatBubbleIcon/ChatBubbleIcon";

export default function ServiceCard({ imageSrc, imageAlt, nombre, descripcion, fecha, precio }) {
    return (
        <div className="w-full bg-white rounded-[8px] shadow-sm flex items-center gap-4 pl-6 py-4 min-w-[300px]">
            <OfficerImage src={imageSrc} alt={imageAlt} />
            <ServiceCardInfo 
                nombre={nombre}
                descripcion={descripcion}
                fecha={fecha}
                precio={precio}
            />

         {/* Ícono directo en la carta sin div extra
                ml-auto lo empuja a la derecha dentro del flex
                pr-8 para que no quede pegado al borde */}
            <ChatBubbleIcon />
            
        </div>
    );
}