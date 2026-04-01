import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import Button from "../../components/Button/Button"
import ServiceCard from "../../components/ServiceCard/ServiceCard"

export default function UserServices() {
    return (
        <div>
            <HeaderUserServices>
                <Button>Inicio</Button>
                <Button>Servicios</Button>
                <Button>Historial</Button>
            </HeaderUserServices>

            <h2 className="mt-16 text-3xl font-black text-very-dark-blue px-16 mb-10">
                Comunicación con <span className="text-light-blue">trabajadores</span>
            </h2>

        </div>
    )
}