import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import SearchBar from "../../components/SearchBar/SearchBar"
import CarouselOfficers from "../../components/CarouselOfficers/CarouselOfficers"
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard"
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection"
import Footer from "../../components/FooterComponent/FooterComponent"
import Satisfaction from "../../components/Satisfaction/Satisfaction"
import SloganApp from "../../components/SloganApp/SloganApp"
import HowItWorks from "../../components/HowItWorks/HowItWorks"

export default function DefaultHome(){
    
    return(
        
        <div>
            {/* Aquí usamos el className como variable que viene
            del componente */}
            {/* w-full: Ocupa el 100% en todas las pantallas.
                gap-4: Separación pequeña (16px) para celulares.
                px-2 md:px-8: Reducimos un poco el padding lateral en celulares para dar más espacio.
            */}
            {/* Clases actualizadas para apilar en celular (flex-col) y separar a los lados en PC (justify-between) */}
            <Header className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-2 md:px-8">
                            
                {/* Un div agrupando los botones para que se mantengan en su propia fila */}
                <div className="flex justify-center ml-10 gap-2 md:gap-6">
                                
                    <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">
                        Iniciar sesión
                    </Button>
                                                                        
                    <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">
                        Registro
                    </Button>
                                            
                    <Button className="bg-yellow text-very-dark-blue px-8 py-2.5 rounded-full font-medium transition-colors">
                        Hazte Officer
                    </Button>
                </div>
            </Header>
            
        <SloganApp>
        </SloganApp>

        <SearchBar>
        </SearchBar>

        <h2 className="mt-20 text-2xl font-black text-very-dark-blue text-center ">
                Descubre algunos de los profesionales con los que <br/>
                <span className="text-light-blue">contamos</span>
        </h2>
        <CarouselOfficers>
        </CarouselOfficers>
       
        <h2 className="mt-20 text-2xl font-black text-very-dark-blue text-center ">
                Descubre qué opinan algunos clientes sobre Ofici
                <span className="text-light-blue">AR</span>
        </h2>

        <TestimonialsSection>
        </TestimonialsSection>

        <h2 className="mt-20 text-2xl font-black text-very-dark-blue text-center mb-10">
                Tu satisfacción está <span className="text-light-blue">garantizada</span>
        </h2>

        <Satisfaction>
        </Satisfaction>

        <HowItWorks>
        </HowItWorks>

        <Footer>
        </Footer>

        </div>
    )
}