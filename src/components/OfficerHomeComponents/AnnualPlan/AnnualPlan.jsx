export default function AnnualPlan(){
    return(
        // Tarjeta 3: Plan Socio Pro Anual (Usando los colores personalizados
        //                                  para un degradado)

        // bg-gradient-to-r: Crea un fondo con un degradado lineal que va de izquierda a derecha (to-r)
        // from-43%: El color light-blue ocupa el 43% del ancho de la tarjeta
        // to-97%: El color very-dark-blue comienza a partir del 97% del ancho de la tarjeta
        <div className="pl-6 pr-0 bg-gradient-to-r from-light-blue from-43% to-very-dark-blue to-97% rounded-xl shadow-md p-5 flex text-center items-center min-h-[200px]">
            <h3 className="text-2xl font-extrabold text-white">¡Plan Socio Pro Anual!</h3>
        </div>
    )
}