import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import UpcomingServices from "../../components/OfficerHomeComponents/UpcomingServices/UpcomingServices";
import HighDemandAreas from "../../components/OfficerHomeComponents/HighDemandAreas/HighDemandAreas";
import Map from "../../components/OfficerHomeComponents/Map/Map";
import YourStatistics from "../../components/OfficerHomeComponents/YourStatistics/YourStatistics";
import AnnualPlan from "../../components/OfficerHomeComponents/AnnualPlan/AnnualPlan";
import MainTitle from "../../components/OfficerHomeComponents/MainTitle/MainTitle";
import ExclusiveOffers from "../../components/OfficerHomeComponents/ExclusiveOffers/ExclusiveOffers";
import SecondaryTitle from "../../components/OfficerHomeComponents/SecondaryTitle/SecondaryTitle";
import Footer from "../../components/FooterComponent/FooterComponent";

export default function OfficersHome(){
    return(
        <div>
            {/* Aquí usamos el className como variable que viene
            del componente */}
            <Header className="justify-center gap-25">
                <Button>
                    Inicio
                </Button>
                
                <Button>
                    Solicitudes de Servicio
                </Button>

                <Button>
                    Historial de Servicios
                </Button>
            </Header>

            {/* Contenedor principal: le damos un padding (p-30) para que no se pegue a los bordes */}
            {/* Responsive: Por defecto, React toma las dimensiones para móvil, al ponerle
            lg: delante de una clase, quiere decir que aplica para pantallas grandes (pcs)
            e ignora las clases anteriores */}
            <div className="px-4 py-8 lg:px-35 lg:mt-20 lg:mb-10 max-w-7xl mx-auto">
                <MainTitle >
                    {/* El <span> actúa como un "resaltador" en línea. Permite aplicar 
                            un color diferente a esta palabra específica sin romper la 
                            línea del título
                        El <span> respeta el tamaño y el grosor que le heredó el <h1>, 
                            pero sobrescribe el color únicamente para esa palabra */}
                            
                    Nuestros <span className="text-light-blue">Servicios</span>
                </MainTitle>

                {/* SISTEMA DE CUADRÍCULA (GRID) 
                    grid-cols-1: En celulares, todo se pone en una sola columna hacia abajo
                    lg:grid-cols-3: En pantallas grandes, dividimos la pantalla en 3 franjas
                    gap-6: Espacio entre las tarjetas */}
                {/* Cuando sea pc, se divide en 3 columnas, la primera columna ocupa 2 franjas y 
                la última columna ocupa 1 franja */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* COLUMNA IZQUIERDA (Ocupa 2 de las 3 franjas) */}
                    {/* Esta columna solo envuelve los Próximos Servicios */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <UpcomingServices />
                    </div>

                    {/* COLUMNA DERECHA (Ocupa 1 de las 3 franjas) */}
                    {/* Le agregamos lg:col-span-1 explícitamente para mantener el orden en PC */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <YourStatistics />
                        
                        <AnnualPlan />
                    </div>

                    {/* Fila interior: Zonas de Alta Demanda y Mapa (Se dividen el espacio a la mitad) */}
                    {/* Ocupa la primera columna (1 franja) de la segunda fila */}
                    <div className="lg:col-span-1">
                        <HighDemandAreas />
                    </div>

                    {/* Ocupa las últimas 2 columnas (2 franjas), rellenando el espacio a la derecha */}
                    <div className="lg:col-span-2">
                        <Map />
                    </div>
                    
                </div>
            </div>

            <div className="px-4 py-8 lg:px-35 max-w-7xl mx-auto">
                <SecondaryTitle>
                    {/* El <span> actúa como un "resaltador" en línea. Permite aplicar 
                            un color diferente a esta palabra específica sin romper la 
                            línea del título
                        El <span> respeta el tamaño y el grosor que le heredó el <h1>, 
                            pero sobrescribe el color únicamente para esa palabra */}
                            
                    Ofertas <span className="text-light-blue">Exclusivas</span>
                </SecondaryTitle>
                    
                <div>
                    <ExclusiveOffers />
                </div>
            </div>

            <Footer />
        </div>
    )
}