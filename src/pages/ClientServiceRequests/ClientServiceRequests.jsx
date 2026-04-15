import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import MainTitle from "../../components/OfficerHomeComponents/MainTitle/MainTitle";
import Footer from "../../components/FooterComponent/FooterComponent";
import ClientRequestCard from "../../components/ClientRequestCard/ClientRequestCard";
import BrokenPipe from "../../assets/tuberia_rota.png";
import GasLeak from "../../assets/escape_gas.png";

export default function ClientServiceRequests() {
    const services = [
        { id: 1, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe },
        { id: 2, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe },
        { id: 3, name: "Jacobito AP", type: "Escape de gas", date: "12/05/2023", img: GasLeak },
        { id: 4, name: "Jacobito AP", type: "Escape de gas", date: "12/05/2023", img: GasLeak },
        { id: 5, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe },
        { id: 6, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe },
        { id: 7, name: "Jacobito AP", type: "Escape de gas", date: "12/05/2023", img: GasLeak },
        { id: 8, name: "Jacobito AP", type: "Escape de gas", date: "12/05/2023", img: GasLeak },
        { id: 9, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe },
        { id: 10, name: "Jacobito AP", type: "Tubería rota", date: "12/05/2023", img: BrokenPipe }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            
            <Header className="w-full flex flex-col md:flex-row items-center justify-center gap-4 px-2 md:px-8">
                <div className="flex justify-center ml-10 gap-2 md:gap-6">
                    <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">Inicio</Button>
                    <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">Solicitudes de Servicios</Button>
                    <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">Historial de Servicios</Button>
                </div>
            </Header>

            <div className="flex-grow w-full px-4 py-8 lg:px-35 lg:mb-10 max-w-7xl mx-auto">
                <MainTitle>
                    Solicitudes de <span className="text-light-blue">Servicio</span>
                </MainTitle>

                {/* CONTENEDOR GRID: 
                grid-cols-1: 1 columna en móvil
                md:grid-cols-2: 2 columnas en tablets/laptops pequeñas
                xl:grid-cols-2: Se mantuvo en 2, se puede variar si se quiere
                gap-6: Espacio entre las tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 justify-items-center">
                    {services.map((service) => (
                        <ClientRequestCard
                            key={service.id} // Siempre se usa una key única al hacer maps
                            clientName={service.name}
                            requestType={service.type}
                            date={service.date}
                            imageUrl={service.img}
                        />
                    ))}
                </div>
            </div>

            <Footer />     
        </div>
    );
}