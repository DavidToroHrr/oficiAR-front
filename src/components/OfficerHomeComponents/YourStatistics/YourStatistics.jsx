import RatingComponent from "../../RatingComponent/RatingComponent";
import { RatingStar } from "flowbite-react";

export default function YourStatistics(){
    return(
        // Tarjeta 2: Tus Estadísticas
        // Se definieron tamaños de fuente específicos usando corchetes [..px]
        // Se usó el color de borde 'soft-gray' definido globalmente en index.css

        // gap-1: Espacio pequeño entre el título y las estadísticas
        // max-w-[750px] y max-h-[350px]: Limita el tamaño máximo de la tarjeta
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-1 max-w-[750px] max-h-[350px]">
            
            {/* Título principal con tamaño personalizado [26px] */}
            <h2 className="font-extrabold text-black text-[26px] text-left">
                Tus Estadísticas
            </h2>

            {/* Contenedor de datos con separación vertical (gap-6) */}
            <div className="flex flex-col gap-6">

                {/* Sección 1: Ganancias del Mes con tamaño [19px] */}
                <div className="flex flex-col text-left">
                    {/* Título de sección Medium (font-medium) */}
                    <h3 className="font-semibold text-black text-[19px]">
                        Ganancias del Mes:
                    </h3>
                    {/* Dato Regular (font-normal) */}
                    <p className="font-light text-black text-[19px]">
                        $180000 COP
                    </p>
                </div>

                {/* Divisor horizontal con el color gris suave global (soft-gray) */}
                <div className="w-full border-t-3 border-soft-gray"/>

                {/* Sección 2: Calificación Promedio con tamaño [19px] */}
                <div className="flex flex-col text-left gap-1">
                    {/* Título de sección Medium (font-medium) */}
                    <h3 className="font-semibold text-black text-[19px]">
                        Calificación Promedio:
                    </h3>
                    
                    {/* Contenedor de estrella y número (alineación centro) */}
                    <div className="flex items-center text-left gap-2">
                        {/* Ícono de estrella */}
                        <RatingComponent 
                            // coloqué una etiqueta de párrafo dentro de la prop
                            // para poder cambiar el color del texto de la calificación
                            // sin afectar el tamaño ni el grosor heredados del componente
                            descriptionCalification={<p className="text-sm text-black">5/5</p>}
                        >
                            <RatingStar />
                        </RatingComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}