export default function Card({image, description}){
    // https://flowbite.com/docs/components/card/
    // Sección --> Horizontal card de la documentación de Flowbite
    // Cambiamos la sintaxis de class a className, 
    // cambiar el formato del nombre de las clases a CamelCase 
    // Todo porque estamos en React, no en HTML
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
            
            {/* Convertimos el enlace en un div vertical simple */}
            <div className="flex flex-col">
                
                {/* Imagen en la parte superior */}
                {/* Usamos object-cover y un alto fijo (h-48) para que la imagen siempre se vea bien */}
                <img 
                    className="object-cover w-full h-48" 
                    src={image} 
                />
                
                {/* Contenedor del texto en la parte inferior */}
                {/* Centramos el texto y ajustamos padding */}
                <div className="flex flex-col items-center justify-center p-1 text-center">
                    
                    {/* Título de la oferta */}
                    {/* Ajustamos el tamaño y el color con los predefinidos en index.css */}
                    <h5 className="text-[36px] font-bold tracking-tight text-light-blue">
                        {description}
                    </h5>
                    
                </div>
            </div>

        </div>
    )
}