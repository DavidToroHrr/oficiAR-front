import OfficerImage from "../OfficerImage/OfficerImage";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";
import ChatBubbleIcon from "../ChatBubbleIcon/ChatBubbleIcon";
import ServiceStatus from "../ServiceStatus/ServiceStatus";
import Button from "../Button/Button";

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

            {estado && <ServiceStatus estado={estado} />}

            {/* Botón Aprobar pago — solo en estado Liberación de pago
                absolute bottom-3 right-3: esquina inferior derecha
                w-[141px] h-[66px] según Figma
                flex flex-col para poner Aprobar arriba y pago abajo */}
            {estado === "Liberación de pago" && (
                <Button className="absolute bottom-3 right-3 bg-light-blue text-white rounded-[8px] font-medium transition-colors flex flex-col items-center justify-center w-16 h-10 md:w-[141px] md:h-[66px] !px-0 !py-0">
                    <span className="text-xs md:text-base leading-tight">Aprobar</span>
                    <span className="text-xs md:text-base leading-tight">pago</span>
                </Button>
            )}
            
        </div>
    );
}