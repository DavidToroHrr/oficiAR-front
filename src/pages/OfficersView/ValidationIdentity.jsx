import logoImg from "../../assets/logo.png"
import UploadDni from "../../components/UploadDni/UploadDni"
import UploadSelfie from "../../components/UploadSelfie/UploadSelfie"
import Button from "../../components/Button/Button"

export default function ValidationIdentity(){
    return(
        // CORRECCIÓN 1: w-[955px] cambió a w-full max-w-[955px].
        // CORRECCIÓN 2: Se eliminó h-[755px] para que la altura sea automática.
        // CORRECCIÓN 3: Cambiamos "p" por "p-6 md:p-10".
        <div className="flex flex-col items-center bg-white/50 w-full max-w-[955px] p-6 md:p-10 rounded-2xl mb-10">
            
            <img 
                src={logoImg} 
                alt="Logo de OficiAR" 
                className="w-[247px] h-[55px] object-contain mb-6" 
            />

            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
                ¡Verifica tu identidad!
            </h2>

            <p className="mb-8 text-center">
                No es que no confiemos en tí, pero es mejor estar seguros.
            </p>

            {/* CORRALITO: Envuelve tarjetas y botón */}
            <div className="flex flex-col gap-6">

                {/* ZONA DE TARJETAS */}
                <div className="flex flex-col md:flex-row gap-5">
                    <UploadDni />
                    <UploadSelfie />
                </div>

                {/* ZONA DEL BOTÓN */}
                <div className="flex justify-end w-full">
                    <Button className="bg- text-gray-900 px-8 py-2.5 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                        Continuar
                    </Button>
                </div>

            </div>
            
        </div>
    )
}