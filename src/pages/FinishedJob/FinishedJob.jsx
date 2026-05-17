import SuccessCheckmark from "../../components/SuccesCheckMark/SuccesCheckMark";
import Button from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import Background from "../../assets/FinishedJobViewBackground.jpeg";
import logo from "../../assets/logo.png";

export default function FinishedJob() {
    return (
        <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center" 
            style={{ backgroundImage: `url(${Background})` }}
        >
            <img src={logo} alt="Logo" className="w-[247px] h-[55px] mb-5 mt-8" />

            {/* Usamos h1. Eliminamos text-4xl/5xl y font-black. 
                Mantenemos el padding superior y el margen inferior */}
            <Typography variant="h1" className="mb-12 text-center pt-12">
                Tu trabajo está terminado
            </Typography>

            <SuccessCheckmark />

            {/* Usamos h2. Es un escalón más abajo en importancia que el 
                anuncio de arriba */}
            <Typography variant="h2" className="mb-12 text-center mt-8">
                Esperando a que el cliente libere el <span className="text-light-blue">pago</span>
            </Typography>

            <div className="flex w-full max-w-md justify-between px-4 mt-4">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
                onClick={()=>goNext("/users-home")}>
                    Regresar
                </Button>

                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
                onClick={()=>goNext("/users-home")}>
                    Preguntar
                </Button>
            </div>
        </div>

    )
}