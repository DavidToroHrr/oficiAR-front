import Typography from "../../Typography/Typography"

export default function AnnualPlan(){
    return(
        // Tarjeta 3: Plan Socio Pro Anual (Usando los colores personalizados
        //                                  para un degradado)

        // bg-gradient-to-r: Crea un fondo con un degradado lineal que va de izquierda a derecha (to-r)
        // from-43%: El color light-blue ocupa el 43% del ancho de la tarjeta
        // to-97%: El color very-dark-blue comienza a partir del 97% del ancho de la tarjeta
        <div className="pl-2 pr-0 bg-gradient-to-r from-light-blue from-43% to-very-dark-blue to-97% rounded-xl shadow-md p-5 flex text-center items-center min-h-[200px]">
            <Typography variant="h3" className="!text-white w-full">
                ¡Plan Socio Pro Anual!
            </Typography>
        </div>
    )
}