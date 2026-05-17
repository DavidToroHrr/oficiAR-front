import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import Button from "../../components/Button/Button"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
// IMPORTAMOS EL PAGINADOR
import PaginatedList from "../../components/PaginatedList/PaginatedList" 

import victor from "../../assets/victor.jpeg"
import jacobo from "../../assets/jacobo.jpeg"
import david from "../../assets/david.jpeg"
import Footer from "../../components/FooterComponent/FooterComponent"
import Typography from "../../components/Typography/Typography"
import useFormNavigation from "../../hooks/useFormNavigation"
import ChatBubbleIcon from "../../components/ChatBubbleIcon/ChatBubbleIcon"



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

const { goNext } = useFormNavigation();

const botonAprobar = (
    <Button 
        className="absolute bottom-3 right-3 bg-light-blue text-white rounded-[8px] font-medium transition-colors flex flex-col items-center justify-center w-12 h-8 sm:w-16 sm:h-10 md:w-[141px] md:h-[66px] !px-0 !py-0"
        onClick={() => goNext("/client-flow/payment-release")}
    >
        <Typography variant="small" className="text-white leading-tight">
            Aprobar <br /> pago
        </Typography>
    </Button>
);


    return (
        <div>
            <HeaderUserServices navigateTo="/users-home">
                <Button 
                    className="text-xs sm:text-base px-2 py-2 sm:px-4 text-black"
                    onClick={() => goNext("/users-home")}
                >
                    Inicio
                </Button>   

                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4 text-light-blue font-bold border-b-2 border-light-blue">
                        Servicios
                </Button>

                <Button 
                    className="text-xs sm:text-base px-2 py-2 sm:px-4 text-black"
                    onClick={() => goNext("/user-historial")}
                >
                    Historial
                </Button>

            </HeaderUserServices>

            <Typography 
                variant="h1" 
                className="mt-16 px-16 mb-10"
            >
                Comunicación con <span className="text-light-blue">trabajadores</span>
            </Typography>

            {/* Mantenemos tus márgenes en este div contenedor */}
            <div className="px-4 mb-32 xl:px-16">
                
                {/* LA PAGINACIÓN HACE EL TRABAJO PESADO */}
                <PaginatedList 
                    items={servicios} 
                    itemsPerPage={3} // Muestra 3 tarjetas por página
                    listClassName="flex flex-col gap-5 w-full" // Mantiene el espaciado vertical original
                    renderItem={(servicio) => (
                        <ServiceCard
                            key={servicio.id}
                            imageSrc={servicio.imageSrc}
                            imageAlt={servicio.imageAlt}
                            nombre={servicio.nombre}
                            descripcion={servicio.descripcion}
                            fecha={servicio.fecha}
                            precio={servicio.precio}
                            estado={servicio.estado}
                            icono={<ChatBubbleIcon onClick={() => goNext("/user-services-chat")} />}
                            botonAccion={servicio.estado === "Liberación de pago" ? botonAprobar : null}
                            
                        />
                    )}
                />

            </div>

            <Footer />

        </div>
    )
}