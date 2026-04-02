import OfficerImage from "../OfficerImage/OfficerImage";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";
import ChatBubbleIcon from "../ChatBubbleIcon/ChatBubbleIcon";
import ServiceStatus from "../ServiceStatus/ServiceStatus";

export default function ServiceCard({ imageSrc, imageAlt, nombre, descripcion, fecha, precio, estado }) {
    return (
        <div className="relative w-full bg-white rounded-[8px] shadow-sm flex items-center gap-4 pl-6 py-4 min-w-[300px]">
            
            <OfficerImage src={imageSrc} alt={imageAlt} />

            <ServiceCardInfo 
                nombre={nombre}
                descripcion={descripcion}
                fecha={fecha}
                precio={precio}
            />

            <ChatBubbleIcon />

            {/* Estado en esquina superior derecha — absolute relativo a la carta */}
            {estado && <ServiceStatus estado={estado} />}
            
        </div>
    );
}