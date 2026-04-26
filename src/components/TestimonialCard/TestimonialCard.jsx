import RatingComponent from "../RatingComponent/RatingComponent"
import { RatingStar } from "flowbite-react";
import Typography from "../Typography/Typography";

export default function TestimonialCard({name, testimonial, calification,descriptionCalification,date}){
    calification = parseInt(calification)
    return(
        <article className=" bg-very-light-gray w-full max-w-[313px] p-5 rounded-lg shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between">
                {/* El nombre usa 'h3' (font-bold y tamaño adaptable) */}
                <Typography variant="h3">
                    {name}
                </Typography>

                <RatingComponent descriptionCalification={descriptionCalification}>
                    {Array.from({ length: calification }).map((_, index) => (
                        <RatingStar key={index} />
                    ))}
                </RatingComponent>

            </div>
            
            {/* El testimonio usa 'body' (tamaño de lectura estándar) */}
            <Typography variant="body">
                {testimonial}
            </Typography>
            
            {/* La fecha usa 'small' (texto menor, ligero). Le sumamos 'italic' como clase extra */}
            <Typography variant="small" className="italic">
                {date}
            </Typography>

        </article>
    )
}
