import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import Button from "../../components/Button/Button"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import victor from "../../assets/victor.jpeg"
import jacobo from "../../assets/jacobo.jpeg"
import david from "../../assets/david.jpeg"


export default function UserServices() {
    return (
        <div>
            <HeaderUserServices>
                <Button className="text-black">Inicio</Button>
                <Button className="text-black">Servicios</Button>
                <Button className="text-black">Historial</Button>
            </HeaderUserServices>

            <h2 className="mt-16 text-3xl font-black text-very-dark-blue px-16 mb-10">
                Comunicación con <span className="text-light-blue">trabajadores</span>
            </h2>

            {/* Cartas de servicio */}
            <div className="flex flex-col gap-5 px-16">
                    <ServiceCard imageSrc={victor} imageAlt="Victor Manuel" />
                    <ServiceCard imageSrc={david} imageAlt="Victor Manuel" />
                    <ServiceCard imageSrc={jacobo} imageAlt="Victor Manuel" />
            </div>

        </div>
    )
}