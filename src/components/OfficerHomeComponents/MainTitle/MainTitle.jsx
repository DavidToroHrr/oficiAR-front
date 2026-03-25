export default function MainTitle(){
    return(
        // 1. TÍTULO PRINCIPAL
        <h1 className="text-4xl font-black text-very-dark-blue mb-8">
            {/* El <span> actúa como un "resaltador" en línea. Permite aplicar 
                    un color diferente a esta palabra específica sin romper la 
                    línea del título
                El <span> respeta el tamaño y el grosor que le heredó el <h1>, 
                    pero sobrescribe el color únicamente para esa palabra */}
                    
            Nuestros <span className="text-light-blue">Servicios</span>
        </h1>
    )
}