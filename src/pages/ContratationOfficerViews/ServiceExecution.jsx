import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import WaitingSpinner from "../../components/WaitingSpinner/WaitingSpinner";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function PaymentRelease() {
    const { goNext } = useFormNavigation();

    return (
        <div className="flex flex-col items-center">
            {/* Usamos h1 para el mensaje de tranquilidad principal */}
            <Typography variant="h1" className="mb-12 mt-12 text-center">
                Tu pago está <span className="text-light-blue">resguardado</span>
            </Typography>

            {/* Usamos body. 
                Quitamos text-lg y text-very-dark-blue porque body ya tiene un color 
                y tamaño equilibrado para lectura */}
            <Typography variant="body" className="text-center mb-8 max-w-2xl">
                Mientras <span className="font-bold text-very-dark-blue">Hernán J.</span> realiza el trabajo, tu dinero permanece seguro en nuestra plataforma.
            </Typography>

            <WaitingSpinner />
            <div className="flex flex-row justify-center w-full mt-8 pb-10 gap-4">
                
                {/* Botón Secundario (Regresar) */}
                <Button className="bg-light-blue text-white px-4 md:px-6 py-2.5 rounded-lg font-medium transition-colors"
                onClick={()=>goNext("/users-home")}>
                    Volver al inicio
                </Button>
                
            </div>
        </div>
    )
}