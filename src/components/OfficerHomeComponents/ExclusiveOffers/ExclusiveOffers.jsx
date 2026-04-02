import Card from "../Card/Card";

export default function ExclusiveOffers({list}){
    // En description:
    // Usamos "String" cuando solo es texto normal en una línea
    // Usamos <> </> cuando necesitas meter etiquetas HTML como <br/> o <strong> 
    // entre el texto, pero no quieres dañar el diseño agregando cajas nuevas
    // Usamos <div> cuando necesitas aplicarle estilos específicos a ese pedazo 
    // de texto (como cambiarle el color, darle márgenes, etc)

    const offersData = list;

    return(
        // Usamos el Grid de Tailwind: 1 columna en celulares, 3 en computadoras
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-20">  
            
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