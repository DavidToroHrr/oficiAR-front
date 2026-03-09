import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"

export default function Login(){
    return(
        // 1. Usamos el contenedor principal para definir el fondo
        <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* 2. El formulario ahora se dibujará sobre este fondo y centrado */}
            <FormComponent />
        </div>
    )
}