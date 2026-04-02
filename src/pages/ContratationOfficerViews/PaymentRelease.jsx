import SuccessCheckmark from "../../components/SuccesCheckMark/SuccesCheckMark";
import Button from "../../components/Button/Button";

export default function PaymentConfirmation() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center pt-12">
                Tu trabajo está terminado
            </h2>

            

            <SuccessCheckmark />


            <h2 className="mb-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center">
               Deseas liberar el <span className="text-light-blue">pago</span>?
            </h2>

            <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                    Liberar pago
            </Button>
        </div>

        
    )
}