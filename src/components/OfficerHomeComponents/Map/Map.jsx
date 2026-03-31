export default function Map(){
    return(
        // Tarjeta Mapa
        // h-full y min-h-[300px] para que ocupe buen espacio verticalmente
        <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden w-full h-full min-h-[250px]">

            {/* El iframe de Google Maps adaptado para React (JSX) */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127174.88147561258!2d-75.56604647946628!3d5.068863287605612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476ffa6a42ce3b%3A0xa863cf6423ea141c!2sManizales%2C%20Caldas!5e0!3m2!1ses-419!2sco!4v1774885152479!5m2!1ses-419!2sco" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            
        </div>
    )
}