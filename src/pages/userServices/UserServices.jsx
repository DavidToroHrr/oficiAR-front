import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import Button from "../../components/Button/Button"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import victor from "../../assets/victor.jpeg"
import jacobo from "../../assets/jacobo.jpeg"
import david from "../../assets/david.jpeg"
import Footer from "../../components/FooterComponent/FooterComponent"


const estadosDisponibles = [
    "Caducado",
    "En discusión",
    "Finalizado",
    "En ejecución",
    "Liberación de pago"
];

const servicios = [
    {
        id: 1,
        imageSrc: victor,
        imageAlt: "Victor Manuel",
        nombre: "Plomería, Victor Manuel",
        descripcion: "Fuga en el fregadero",
        fecha: "12/05/2023",
        precio: "$50.000",
        estado: estadosDisponibles[0]
    },
    {
        id: 2,
        imageSrc: david,
        imageAlt: "David Esteban",
        nombre: "Electricidad, David Esteban",
        descripcion: "Corto circuito en el panel",
        fecha: "15/06/2023",
        precio: "$80.000",
        estado: estadosDisponibles[1]
    },
    {
        id: 3,
        imageSrc: jacobo,
        imageAlt: "Jacobo Arroyave",
        nombre: "Carpintería, Jacobo Arroyave",
        descripcion: "Reparación de puerta dañada",
        fecha: "20/07/2023",
        precio: "$60.000",
        estado: estadosDisponibles[2]
    },
    {
        id: 4,
        imageSrc: "https://randomuser.me/api/portraits/men/46.jpg",
        imageAlt: "Carlos Mendez",
        nombre: "Electricidad, Carlos Mendez",
        descripcion: "Instalación de toma corrientes",
        fecha: "28/07/2023",
        precio: "$45.000",
        estado: estadosDisponibles[4]
    },
    {
        id: 5,
        imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        imageAlt: "Carlos Restrepo",
        nombre: "Pintura, Carlos Restrepo",
        descripcion: "Pintura de sala y comedor",
        fecha: "01/08/2023",
        precio: "$55.000",
        estado: estadosDisponibles[3]
    },
    {
        id: 6,
        imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
        imageAlt: "Ana Lucia",
        nombre: "Gasfitería, Ana Lucia",
        descripcion: "Instalación de lavamanos nuevo",
        fecha: "10/08/2023",
        precio: "$35.000",
        estado: estadosDisponibles[2]
    }
];

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

            <div className="flex flex-col gap-5 px-4 mb-4 xl:px-16">
                {servicios.map(servicio => (
                    <ServiceCard
                        key={servicio.id}
                        imageSrc={servicio.imageSrc}
                        imageAlt={servicio.imageAlt}
                        nombre={servicio.nombre}
                        descripcion={servicio.descripcion}
                        fecha={servicio.fecha}
                        precio={servicio.precio}
                        estado={servicio.estado}
                    />
                ))}
            </div>

            <Footer />

        </div>
    )
}