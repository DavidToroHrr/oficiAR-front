import SuccessCheckmark from "../../components/SuccesCheckMark/SuccesCheckMark";
import Button from "../../components/Button/Button";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function PaymentConfirmation() {
    const { goNext } = useFormNavigation();
    return (
        <div className="flex flex-col items-center">
            {/* Usamos h1. Eliminamos text-4xl/5xl y font-black. 
                Mantenemos el padding superior y el margen inferior */}
            <Typography variant="h1" className="mb-12 text-center pt-12">
                Tu trabajo está terminado
            </Typography>

            <SuccessCheckmark />

            {/* Usamos h2. Es un escalón más abajo en importancia que el 
                anuncio de arriba */}
            <Typography variant="h2" className="mb-12 text-center mt-8">
                ¿Deseas liberar el <span className="text-light-blue">pago</span>?
            </Typography>

            <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
            onClick={()=>goNext("/checkout")}>
                    Liberar pago
            </Button>
        </div>

    )
}