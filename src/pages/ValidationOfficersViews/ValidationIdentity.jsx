import logoImg from "../../assets/logo.png"
import UploadDni from "../../components/UploadDni/UploadDni"
import UploadElement from "../../components/UploadElement/UploadElement"
import Button from "../../components/Button/Button"
import useFormNavigation from "../../hooks/useFormNavigation"
import Typography from "../../components/Typography/Typography"

export default function ValidationIdentity() {
    const { goNext } = useFormNavigation();
    return (
        // CORRECCIÓN 1: w-[955px] cambió a w-full max-w-[955px].
        // CORRECCIÓN 2: Se eliminó h-[755px] para que la altura sea automática.
        // CORRECCIÓN 3: Cambiamos "p" por "p-6 md:p-10".
        <div className="flex flex-col items-center bg-white/70 w-full max-w-[955px] p-6 md:p-10 rounded-2xl mb-10 min-w-[370px]">

            <img
                src={logoImg}
                alt="Logo de OficiAR"
                className="w-[247px] h-[55px] object-contain mb-6"
            />

            <Typography variant="h2" className="mb-2 text-center">
                ¡Verifica tu identidad!
            </Typography>

            <Typography variant="body" className="mb-8 text-center">
                No es que no confiemos en tí, pero es mejor estar seguros.
            </Typography>

            {/* CORRALITO: Envuelve tarjetas y botón */}
            <div className="flex flex-col gap-6">

                {/* ZONA DE TARJETAS */}
                <div className="flex flex-col md:flex-row gap-5">
                    <UploadDni />
                    <UploadElement title="Sube tu selfie" buttonTitle="Subir Selfie" />
                </div>

                {/* ZONA DEL BOTÓN */}
                <div className="flex justify-end w-full">
                    <Button className="bg- text-white px-8 py-2.5 rounded-lg font-medium bg-light-blue transition-colors"
                    onClick={()=>goNext("/validation/officer-specification")}>
                        <Typography variant="body" className="text-white">
                            Continuar
                        </Typography>
                    </Button>
                </div>

            </div>

        </div>
    )
}