import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ExclusiveOffers from "../../components/OfficerHomeComponents/ExclusiveOffers/ExclusiveOffers";
import SecondaryTitle from "../../components/OfficerHomeComponents/SecondaryTitle/SecondaryTitle";
import Cleaning from "../../assets/OfficersHomeCards/limpieza.png";
import Multimeter from "../../assets/OfficersHomeCards/multimetro.png";
import Footer from "../../components/FooterComponent/FooterComponent";
import Albañileria from "../../assets/UsersHomeCards/albañileria.png";
import Carpinteria from "../../assets/UsersHomeCards/carpinteria.png";
import Cerrajeria from "../../assets/UsersHomeCards/cerrajeria.png";
import Fletes from "../../assets/UsersHomeCards/fletes.png";
import GasCalefaccion from "../../assets/UsersHomeCards/gas y calefaccion.png";
import Ac from "../../assets/UsersHomeCards/instalacion de AC.png";
import Jardineria from "../../assets/UsersHomeCards/jardineria.png";
import Limpieza from "../../assets/UsersHomeCards/limpieza profesional.png";
import Pintura from "../../assets/UsersHomeCards/pintura.png";
import Plomeria from "../../assets/UsersHomeCards/plomeria.png";
import Refrigeracion from "../../assets/UsersHomeCards/tecnico en refrigeracion.png";

export default function UsersHome(){
    const OurServices = [
        {
            id: 1,
            image: Multimeter,
            // <br/> salto de línea
            description: <>Electricidad</>
        },
        {
            id: 2,
            image: Cerrajeria, 
            description: <>Cerrajería</>
        },
        {
            id: 3,
            image: GasCalefaccion, 
            description: <>Gas y Calefacción</>
        },
        {
            id: 4,
            image: Fletes,
            description: <div className="mt-6">Fletes</div>
        },
        {
            id: 5,
            image: Limpieza,
            description: <>Limpieza <br/> profesional</>
        },
        {
            id: 6,
            image: Refrigeracion, 
            description: <>Técnico en <br/> Refrigeración</>
        },
        {
            id: 7,
            image: Ac, 
            description: <>Instalación de AC</>
        },
        {
            id: 8,
            image: Carpinteria, 
            description: <>Carpintería</>
        },
        {
            id: 9,
            image: Pintura, 
            description: <>Pintura</>
        },
        {
            id: 10,
            image: Albañileria, 
            description: <>Albañilería</>
        },
        {
            id: 11,
            image: Jardineria,
            description: <>Jardinería</>
        },
        {
            id: 12,
            image: Plomeria, 
            description: <>Plomería</>
        }
    ];
    const ExclusiveOffersList = [
            {
                id: 1,
                image: Cleaning,
                // <br/> salto de línea
                description: <>¡20 % <br/> OFF limpieza!</>
            },
            {
                id: 2,
                image: Multimeter, 
                description: <>¡Descuento <br/> flash!</>
            },
            {
                id: 3,
                image: Multimeter, 
                description: <div className="mt-5">Por definir</div>
            },
            {
                id: 4,
                image: Multimeter,
                description: <>Servicio gratis <br/> de plomería</>
            },
            {
                id: 5,
                image: Multimeter,
                description: <div className="mt-5">Por definir</div>
            },
            {
                id: 6,
                image: Multimeter, 
                description: <div className="mt-5">Por definir</div>
            }
    ];

    return(
        <div>
            {/* w-full: Ocupa el 100% en todas las pantallas
                gap-4: Separación pequeña (16px) para celulares
                md:gap-25: Separación grande (100px) cuando la pantalla sea mediana (tablets/PC)
                px-2 md:px-8: Reducimos un poco el padding lateral en celulares para dar más espacio.
            */}
            <Header className="w-full justify-center gap-4 md:gap-25 px-2 md:px-8">
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">
                    Inicio
                </Button>
                                            
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">
                    Servicios
                </Button>
                            
                <Button className="text-xs sm:text-base px-2 py-2 sm:px-4">
                    Perfil
                </Button>
            </Header>

            <div className="px-4 py-8 lg:px-35 lg:mt-15 lg:mb-10 max-w-7xl mx-auto">
                <SecondaryTitle>
                    {/* El <span> actúa como un "resaltador" en línea. Permite aplicar 
                            un color diferente a esta palabra específica sin romper la 
                            línea del título
                        El <span> respeta el tamaño y el grosor que le heredó el <h1>, 
                            pero sobrescribe el color únicamente para esa palabra */}
                                        
                    Nuestros <span className="text-light-blue">Servicios</span>
                </SecondaryTitle>
                                
                <div>
                    <ExclusiveOffers 
                        list={OurServices}
                    />
                </div>

                {/* Pasamos las clases para convertirlo en flexible, centrarlo 
                    y separarlo de arriba 
                mx-auto: Toma el espacio disponible a la izquierda y derecha 
                    y lo centra horizontalmente
                w-full: En celulares, ocupa el 100% del ancho disponible
                md:w-auto: En pantallas medianas (tablets) en adelante, vuelve a su ancho 
                    automático (solo lo que ocupe el texto)
                text-sm md:text-base: Letra un poco más pequeña en móvil, tamaño normal en PC
                py-3 md:py-4: Un poco menos de altura en celular, más alto en PC */}
                <Button className="flex mx-auto mb-25 bg-light-blue text-white w-full md:w-auto text-sm md:text-base py-3 px-6 md:py-4 md:px-8 lg:px-10 lg:py-8 rounded-[8px]
                    font-extrabold lg:text-[36px]">

                    Solicitar un servicio
                </Button>

                <SecondaryTitle>           
                    Ofertas <span className="text-light-blue">Exclusivas</span>
                </SecondaryTitle>

                <div className="mt-25">
                    <ExclusiveOffers 
                        list={ExclusiveOffersList}
                    />
                </div>

            </div>
            
            <Footer />
        </div>
    )
}