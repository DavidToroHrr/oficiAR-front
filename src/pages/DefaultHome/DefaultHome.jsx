import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import SearchBar from "../../components/SearchBar/SearchBar"
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


        <p className="pt-48 text-5xl font-black text-very-dark-blue text-center ">
            Soluciones <br/>
            <span className="text-light-blue">profesionales<br/></span> 
            para tu hogar<br/> 
            <span className="text-light-blue">al instante</span>
        </p>

        <SearchBar>
        </SearchBar>

        <CarouselOfficers>
        </CarouselOfficers>
       

        <TestimonialsSection>
        </TestimonialsSection>

        </div>
    )
}