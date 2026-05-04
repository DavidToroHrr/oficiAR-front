import { Rating } from "flowbite-react";
import Typography from "../Typography/Typography";

export default function RatingComponent({children,descriptionCalification}){
    return(
        <Rating>
            {children}
            {/* en children van las estrellas que son RatingStar */}

            {/* Cambiamos el <p> manual por <Typography>.
                Usamos variant="small" para mantener la estética del rating,
                y pasamos el margen izquierdo por className
            */}
            <Typography 
                variant="small" 
                className="ml-2 !font-light"
            >
                {descriptionCalification}
            </Typography>
        </Rating>
        
    )
}