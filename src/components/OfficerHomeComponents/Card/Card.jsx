import Typography from "../../Typography/Typography"

export default function Card({image, description}){
    // https://flowbite.com/docs/components/card/
    // Sección --> Horizontal card de la documentación de Flowbite
    // Cambiamos la sintaxis de class a className, 
    // cambiar el formato del nombre de las clases a CamelCase 
    // Todo porque estamos en React, no en HTML
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-[280px] w-full mx-auto">
            
            {/* Convertimos el enlace en un div vertical simple */}
            <div className="flex flex-col">
                
                {/* Imagen en la parte superior */}
                {/* Usamos object-cover y un alto fijo (h-32) para que la imagen siempre se vea bien */}
                <img 
                    className="object-cover w-full h-32" 
                    src={image} 
                />
                
                {/* Contenedor del texto en la parte inferior */}
                {/* Centramos el texto y ajustamos padding */}
                <div className="flex flex-col items-center justify-center p-4 text-center">
                    
                    {/* TÍTULO DE LA OFERTA: Usamos subtitle.
                        Usamos !text-light-blue para mantener el color de marca 
                        específico de estas tarjetas */}
                    <Typography 
                        variant="subtitle" 
                        className="!text-light-blue tracking-tight"
                    >
                        {description}
                    </Typography>
                    
                </div>
            </div>

        </div>
    )
}