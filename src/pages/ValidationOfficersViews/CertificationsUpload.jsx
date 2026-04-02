import logoImg from "../../assets/logo.png"
import Button from "../../components/Button/Button"
import UploadElement from "../../components/UploadElement/UploadElement"

export default function CertificationsUpload() {
    return (
        <div className="flex flex-col items-center w-full max-w-[955px] mx-auto p-6 bg-white/70 rounded-2xl shadow-xl mb-10 min-w-[370px]" >
            <img
                src={logoImg}
                alt="Logo de OficiAR"
                className="w-[247px] h-[55px] object-contain mb-6"
            />
            <h2 className="text-2xl font-bold mb-2 text-center text-very-dark-blue">
                ¡Adjunta tus certificados!
            </h2>
            <p className="mb-8 text-center">
                Sube tus certificados para validar tus conocimientos.
            </p>

            <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-5">
                    <UploadElement title="Sube tu certificado" buttonTitle="Subir Certificado" />
                </div>

            </div>

            <div className="flex justify-end w-full">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                    Continuar
                </Button>
            </div>
        </div>
    )
}