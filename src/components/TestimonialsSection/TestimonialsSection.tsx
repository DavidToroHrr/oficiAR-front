import TestimonialCard from "../TestimonialCard/TestimonialCard"

export default function TestimonialsSection(){
    
    const testimonials=[{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{
        name:"David",
        testimonial:"Muy buen servicio",
        calification:"5",
        descriptionCalification:"5 out of 5",
        date:"2022-01-01"
    },{}];
    
    return (
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto pt-20">
    {testimonials.map((element, index) => (
      <TestimonialCard
        key={index}
        name={element.name}
        testimonial={element.testimonial}
        calification={element.calification}
        descriptionCalification={element.descriptionCalification}
        date={element.date}
      />
    ))}
  </section>
);
}