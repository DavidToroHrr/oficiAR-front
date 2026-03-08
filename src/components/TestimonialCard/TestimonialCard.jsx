import RatingComponent from "../RatingComponent/RatingComponent"
import { RatingStar } from "flowbite-react";

export default function TestimonialCard({name, testimonial, calification,descriptionCalification,date}){
    calification = parseInt(calification)
    return(
        <article className=" bg-very-ligth-gray w-[313px] min-h-[236px] p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex items-center justify-between">
                            <p className="font-bold text-4xl">{name}</p>
                            <RatingComponent descriptionCalification={descriptionCalification}>
                {Array.from({ length: calification }).map((_, index) => (
                    <RatingStar key={index} />
                ))}
            </RatingComponent>

            </div>
            <p className="">{testimonial}</p>
            
            <p className="italic font-light">{date}</p>
        </article>
    )
}