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
            <Header> 
                <a href="">Iniciar Sesion</a>
                <a href="">Registro</a>

                <Button>
                    Hazte Officer
                </Button>
            </Header>


        <SloganApp>
        </SloganApp>

        <SearchBar>
        </SearchBar>


        <h2 className="mt-48 text-5xl font-black text-very-dark-blue text-center ">
                Descubre algunos de los profesionales con los que <br/>
                <span className="text-light-blue">contamos</span>
        </h2>
        <CarouselOfficers>
        </CarouselOfficers>
       
        <h2 className="mt-48 text-5xl font-black text-very-dark-blue text-center ">
                Descubre qué opinan algunos clientes sobre Ofici
                <span className="text-light-blue">AR</span>
        </h2>

        
        <TestimonialsSection>
        </TestimonialsSection>


        <h2 className="mt-48 text-5xl font-black text-very-dark-blue text-center mb-10">
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