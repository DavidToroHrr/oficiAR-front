import RatingComponent from "../../RatingComponent/RatingComponent";
import { RatingStar } from "flowbite-react";
import Typography from "../../Typography/Typography";

export default function YourStatistics(){
    return(
        // Tarjeta 2: Tus Estadísticas
        // Se definieron tamaños de fuente específicos usando corchetes [..px]
        // Se usó el color de borde 'soft-gray' definido globalmente en index.css

        // gap-1: Espacio pequeño entre el título y las estadísticas
        // max-w-[750px] y max-h-[350px]: Limita el tamaño máximo de la tarjeta
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-1 max-w-[750px] max-h-[350px]">
            
            {/* Usamos h2. Eliminamos font-extrabold y text-[26px] */}
            <Typography variant="h2" className="text-left">
                Tus Estadísticas
            </Typography>

            {/* Contenedor de datos con separación vertical (gap-6) */}
            <div className="flex flex-col gap-6">

                {/* Sección 1: Ganancias del Mes con tamaño [19px] */}
                <div className="flex flex-col text-left">
                    <Typography variant="subtitle">
                        Ganancias del Mes:
                    </Typography>

                    <Typography variant="body" className="!text-black font-light">
                        $180.000 COP
                    </Typography>
                </div>

                {/* Divisor horizontal con el color gris suave global (soft-gray) */}
                <div className="w-full border-t-3 border-soft-gray"/>

                {/* Sección 2: Calificación Promedio con tamaño [19px] */}
                <div className="flex flex-col text-left gap-1">
                    <Typography variant="subtitle">
                        Calificación Promedio:
                    </Typography>
                    
                    {/* Contenedor de estrella y número (alineación centro) */}
                    <div className="flex items-center text-left gap-2">
                        {/* Ícono de estrella */}
                        <RatingComponent 
                            // coloqué una etiqueta de párrafo dentro de la prop
                            // para poder cambiar el color del texto de la calificación
                            // sin afectar el tamaño ni el grosor heredados del componente
                            descriptionCalification={
                            /* CALIFICACIÓN: Usamos small para el número de la estrella */
                                <Typography variant="small" className="font-bold !text-black">
                                    5/5
                                </Typography>
                            }
                        >
                            <RatingStar />
                        </RatingComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}