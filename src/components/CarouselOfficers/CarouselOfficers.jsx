import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import carpenterImg from "../../assets/Carousel/carpenter.png";
import airConditionerImg from "../../assets/Carousel/air-conditioner.png";
import painterImg from "../../assets/Carousel/painter.png";
import gasistImg from "../../assets/Carousel/gasist.png";

// 1. Creamos un arreglo con nuestros datos. 
// En el futuro, esto vendrá de tu base de datos (Backend)
const profesionales = [
  { id: 1, img: carpenterImg, alt: "Carpintero" },
  { id: 2, img: airConditionerImg, alt: "Aire Acondicionado" },
  { id: 3, img: gasistImg, alt: "Gasista" },
  { id: 4, img: painterImg, alt: "Pintor" }
];

// 2. Definimos la clase responsiva gigante UNA SOLA VEZ en una variable
const alturaCarrusel = "h-70 sm:h-64 xl:h-100 2xl:h-96";

export default function CarouselOfficers() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 pt-16">
      
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false} 
        interval={3000}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        
        {/* 3. Usamos .map() para recorrer el arreglo y dibujar cada foto */}
        {profesionales.map((profesional) => (
          <div key={profesional.id} className={alturaCarrusel}>
            <img 
              src={profesional.img} 
              alt={profesional.alt} 
              className="object-cover h-full w-full" 
            />
          </div>
        ))}

      </Carousel>

    </div>
  );
}