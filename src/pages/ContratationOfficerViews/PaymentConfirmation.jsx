import Button from "../../components/Button/Button";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function PaymentConfirmation() {
    const { goBack, goNext } = useFormNavigation();

    return (
        <div>
            {/* Usamos h1 para consistencia total */}
            <Typography variant="h1" className="mb-12 text-center">
                Resumen de tu <span className="text-light-blue">solicitud</span>
            </Typography>

            <div className="flex flex-col items-center w-full max-w-[955px] mx-auto p-6 bg-white/70 rounded-2xl shadow-xl mb-10" >
                <Typography variant="h2" className="mb-4 text-center">
                    Detalles del servicio
                </Typography>

                {/* FILAS DE DATOS: 
                    Usamos h3 para las etiquetas (Labels) y body para los valores
                */}
                <div className="flex justify-between py-4 gap-4">
                    <Typography variant="h3">Tipo de servicio:</Typography>
                    <Typography variant="body">Nombre del técnico</Typography>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <Typography variant="h3">Fecha y hora:</Typography>
                    <Typography variant="body">Fecha y hora</Typography>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <Typography variant="h3">Lugar:</Typography>
                    <Typography variant="body">Lugar</Typography>
                </div>

                <div className="flex justify-between py-4 gap-4">
                    <Typography variant="h3" className="text-light-blue">Total importe:</Typography>
                    <Typography variant="h3" className="text-light-blue">Precio</Typography>
                </div>
            </div>

            <div className="flex flex-row justify-between w-full mt-8 pb-10 gap-4">          
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors"
                onClick={goBack}>
                    Regresar
                </Button>
                
                {/* Botón Primario (Avanzar) */}
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-bold transition-colors shadow-md"
                onClick={()=>goNext("/checkout")}>
                    Depositar y bloquear fondos
                </Button>
                
            </div>
        </div>
    )
}