import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
// Asegúrate de que esta ruta apunte a donde guardaste el componente
import PaginatedList from "../PaginatedList/PaginatedList"; 
import useResponsiveItems from "../../hooks/useResponsiveItems"
export default function TestimonialsSection() {
    
    const testimonials = [
        {
            name: "David",
            testimonial: "Muy buen servicio",
            calification: "1",
            descriptionCalification: "1 out of 5",
            date: "2022-01-01"
        }, {
            name: "Thomas",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Victor",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Paula",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Daniela",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Gaby",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Adriana",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Nelson",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }, {
            name: "Pepe",
            testimonial: "Muy buen servicio",
            calification: "5",
            descriptionCalification: "5 out of 5",
            date: "2022-01-01"
        }
    ];
    const responsiveItemsPerPage= useResponsiveItems(3,6);
    return (
        <section className="max-w-5xl mx-auto pt-36 px-4">
            
            {/* LA MAGIA DE LA PAGINACIÓN */}
            <PaginatedList 
                items={testimonials} 
                itemsPerPage={responsiveItemsPerPage} // Mostrará 3 en móvil, 6 en PC
                listClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                renderItem={(element, index) => (
                    <TestimonialCard
                        key={index}
                        name={element.name}
                        testimonial={element.testimonial}
                        calification={element.calification}
                        descriptionCalification={element.descriptionCalification}
                        date={element.date}
                    />
                )}
            />
            
        </section>
    );
}