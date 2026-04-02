import OfficerImage from "../OfficerImage/OfficerImage";
import ServiceCardInfo from "../ServiceCardInfo/ServiceCardInfo";

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
        </div>
    );
}