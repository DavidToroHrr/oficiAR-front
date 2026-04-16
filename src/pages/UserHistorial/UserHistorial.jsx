import Button from "../../components/Button/Button"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import HeadphonesIcon from "../../components/HeadphonesIcon/HeadphonesIcon"
import Footer from "../../components/FooterComponent/FooterComponent"
import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import jacobo from "../../assets/jacobo.jpeg"
import escapeGas from "../../assets/escape_gas.png"
import tuberiaRota from "../../assets/tuberia_rota.png"

const estadosDisponibles = [
    "Caducado",
    "En discusión",
    "Finalizado",
    "En ejecución",
    "Liberación de pago"
];

const historial = [
    {
        id: 1,
        imageSrc: escapeGas,
        imageAlt: "Escape de gas",
        nombre: "Victor Manuel",
        descripcion: "Escape de gas en cocina",
        fecha: "12/05/2023",
        precio: "$50.000",
        estado: estadosDisponibles[2]
    },
    {
        id: 2,
        imageSrc: tuberiaRota,
        imageAlt: "Tubería rota",
        nombre: "Jacobo Arroyave",
        descripcion: "Tubería rota en baño principal",
        fecha: "15/06/2023",
        precio: "$75.000",
        estado: estadosDisponibles[3]
    },
    {
        id: 3,
        imageSrc: escapeGas,
        imageAlt: "Instalación eléctrica",
        nombre: "Carlos Restrepo",
        descripcion: "Instalación de tomacorrientes nuevos",
        fecha: "20/07/2023",
        precio: "$45.000",
        estado: estadosDisponibles[0]
    },
    {
        id: 4,
        imageSrc: tuberiaRota,
        imageAlt: "Pintura",
        nombre: "Ana Lucia",
        descripcion: "Pintura de sala y comedor completo",
        fecha: "01/08/2023",
        precio: "$120.000",
        estado: estadosDisponibles[1]
    },
    {
        id: 5,
        imageSrc: tuberiaRota,
        imageAlt: "Jacobo Arroyave",
        nombre: "Jacobo Arroyave",
        descripcion: "Reparación de puerta principal dañada",
        fecha: "10/08/2023",
        precio: "$60.000",
        estado: estadosDisponibles[4]
    },
    {
        id: 6,
        imageSrc: escapeGas,
        imageAlt: "Gasfitería",
        nombre: "David Toro",
        descripcion: "Revisión general de tuberías del hogar",
        fecha: "15/08/2023",
        precio: "$90.000",
        estado: estadosDisponibles[2]
    }
];

const botonFinalizar = (
    <Button className="absolute bottom-3 right-3 bg-light-blue text-white rounded-[8px] font-medium transition-colors flex flex-col items-center justify-center w-12 h-8 sm:w-16 sm:h-10 md:w-[141px] md:h-[66px] !px-0 !py-0">
        <span className="text-[9px] sm:text-xs md:text-base leading-tight">Finalizar</span>
        <span className="text-[9px] sm:text-xs md:text-base leading-tight">servicio</span>
    </Button>
);

export default function UserHistorial() {
    return (
        <div>
            <HeaderUserServices>
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4 text-black">
                    Inicio
                </Button>
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4 text-black">
                    Solicitudes de Servicios
                </Button>
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4 text-black">
                    Historial de Servicios
                </Button>
            </HeaderUserServices>

            <h2 className="mt-16 text-3xl font-black text-very-dark-blue px-16 mb-10">
                Historial de <span className="text-light-blue">servicios</span>
            </h2>

            <div className="flex flex-col gap-5 px-4 mb-32 xl:px-16">
                {historial.map(servicio => (
                    <ServiceCard
                        key={servicio.id}
                        imageSrc={servicio.imageSrc}
                        imageAlt={servicio.imageAlt}
                        nombre={servicio.nombre}
                        descripcion={servicio.descripcion}
                        fecha={servicio.fecha}
                        precio={servicio.precio}
                        estado={servicio.estado}
                        icono={<HeadphonesIcon />}
                        botonAccion={botonFinalizar}
                    />
                ))}
            </div>

            <Footer />
        </div>
    )
}