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
            <div className="flex flex-col gap-5 px-4 mb-4 xl:px-16">

                <ServiceCard 
                    imageSrc={victor} 
                    imageAlt="Victor Manuel"
                    nombre="Plomería, Victor Manuel"
                    descripcion="Fuga en el fregadero"
                    fecha="12/05/2023"
                    precio="$50.000"
                />
                <ServiceCard 
                    imageSrc={david} 
                    imageAlt="David"
                    nombre="Electricidad, David Esteban"
                    descripcion="Corto circuito en el panel"
                    fecha="15/06/2023"
                    precio="$80.000"
                />
                <ServiceCard 
                    imageSrc={jacobo} 
                    imageAlt="Jacobo"
                    nombre="Carpintería, Jacobo Arroyave"
                    descripcion="Reparación de puerta dañada"
                    fecha="20/07/2023"
                    precio="$60.000"
                />
        </div>

        </div>
    )
}