export default function HighDemandAreas(){
    return(
        // Tarjeta Zonas
        // Responsive porque h-full le indica que debe ocupar el 100% 
        // del alto de su contenedor padre, pero min-h-[250px] asegura que 
        // tenga un mínimo de altura para no verse muy pequeña en pantallas pequeñas 
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center text-center h-full min-h-[250px]">
            <h3 className="text-2xl font-extrabold text-black">Zonas de Alta<br/>Demanda</h3>
        </div>
    )
}