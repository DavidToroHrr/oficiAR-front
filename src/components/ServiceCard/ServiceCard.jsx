import OfficerImage from "../OfficerImage/OfficerImage";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";
import ChatBubbleIcon from "../ChatBubbleIcon/ChatBubbleIcon";
import ServiceStatus from "../ServiceStatus/ServiceStatus";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

export default function ServiceCard({ imageSrc, imageAlt, nombre, descripcion, fecha, precio, estado, icono, botonAccion }) {
    return (
        <div className="relative w-full bg-white rounded-[8px] shadow-sm flex items-center gap-4 pl-6 py-4 min-w-[300px]">
            
            <OfficerImage src={imageSrc} alt={imageAlt} />

            <ServiceCardInfo 
                nombre={nombre}
                descripcion={descripcion}
                fecha={fecha}
                precio={precio}
            />

            {icono ? icono : <ChatBubbleIcon />}

            {estado && <ServiceStatus estado={estado} />}

            {/* Botón de UserServices — Aprobar pago */}
            {estado === "Liberación de pago" && !botonAccion && (
                <Button className="absolute bottom-3 right-3 bg-light-blue text-white rounded-[8px] font-medium transition-colors flex flex-col items-center justify-center w-12 h-8 sm:w-16 sm:h-10 md:w-[141px] md:h-[66px] !px-0 !py-0">
                    <Typography variant="small" className="text-white leading-tight">
                        Aprobar <br /> pago
                    </Typography>
                </Button>
            )}

            {/* Botón personalizado desde la vista — Finalizar servicio */}
            {botonAccion && estado === "En ejecución" && botonAccion}
            
        </div>
    );
}