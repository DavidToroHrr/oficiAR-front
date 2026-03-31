import Card from "../Card/Card";
import Cleaning from "../../../assets/OfficersHomeCards/limpieza.png";
import Multimeter from "../../../assets/OfficersHomeCards/multimetro.png";

export default function ExclusiveOffers(){
    // En description:
    // Usamos "String" cuando solo es texto normal en una línea
    // Usamos <> </> cuando necesitas meter etiquetas HTML como <br/> o <strong> 
    // entre el texto, pero no quieres dañar el diseño agregando cajas nuevas
    // Usamos <div> cuando necesitas aplicarle estilos específicos a ese pedazo 
    // de texto (como cambiarle el color, darle márgenes, etc)

    const offersData = [
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
        // Usamos el Grid de Tailwind: 1 columna en celulares, 3 en computadoras
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-30">  
            
            {/* Recorremos el arreglo y dibujamos un <Card /> por cada objeto */}
            {offersData.map((offer) => (
                <Card 
                    key={offer.id} // React exige una "key" única siempre que se usa .map()
                    image={offer.image} 
                    description={offer.description} 
                />
            ))}
            
        </div>  
    )
}