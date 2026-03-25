import Header from "../../components/Header/Header";
import UpcomingServices from "../../components/OfficerHomeComponents/UpcomingServices/UpcomingServices";
import HighDemandAreas from "../../components/OfficerHomeComponents/HighDemandAreas/HighDemandAreas";
import Map from "../../components/OfficerHomeComponents/Map/Map";
import YourStatistics from "../../components/OfficerHomeComponents/YourStatistics/YourStatistics";
import AnnualPlan from "../../components/OfficerHomeComponents/AnnualPlan/AnnualPlan";
import MainTitle from "../../components/OfficerHomeComponents/MainTitle/MainTitle";

export default function OfficersHome(){
    return(
        <div>
            <Header />

            {/* Contenedor principal: le damos un padding (p-30) para que no se pegue a los bordes */}
            <div className="p-30 max-w-7xl mx-auto">
                <MainTitle />

                {/* 2. SISTEMA DE CUADRÍCULA (GRID) 
                    grid-cols-1: En celulares, todo se pone en una sola columna hacia abajo
                    lg:grid-cols-3: En pantallas grandes, dividimos la pantalla en 3 franjas
                    gap-6: Espacio entre las tarjetas */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* COLUMNA IZQUIERDA (Ocupa 2 de las 3 franjas) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <UpcomingServices />

                        {/* Fila interior: Zonas de Alta Demanda y Mapa (Se dividen el espacio a la mitad) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-48">
                            <HighDemandAreas />

                            <Map />
                        </div>
                    </div>

                    {/* COLUMNA DERECHA (Ocupa 1 de las 3 franjas) */}
                    <div className="flex flex-col gap-6">
                        <YourStatistics />
                        
                        <AnnualPlan />
                    </div>
                </div>
            </div>
        </div>
    )
}