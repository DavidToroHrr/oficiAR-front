import { Rating } from "flowbite-react";
export default function RatingComponent({children,descriptionCalification}){
    return(
        <Rating>
            {children}
            {/* en children van las estrellas que son RatingStar */}

            <p className="ml-2 text-sm font-light  dark:text-gray-400">{descriptionCalification}</p>
        </Rating>
        
    )
}