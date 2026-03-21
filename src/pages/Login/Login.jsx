import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"
import TextInput from "../../components/TextInput/TextInput"
import Button from "../../components/Button/Button"

export default function Login(){
    function handleLogin(){
        console.log("Login");
        
    }
    return(
        // 1. Usamos el contenedor principal para definir el fondo
        <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* 2. El formulario ahora se dibujará sobre este fondo y centrado */}
            <FormComponent
                // Espacio para los botones sociales como prop del FormComponent
                socialButtons={
                    <div className="flex justify-center gap-1 w-full max-w-[360px] mx-auto">
                        <Button className='!bg-soft-gray !text-white w-[85.25px] !px-0 !font-medium border-[1.35px] border-black rounded-full'>
                            Facebook
                        </Button>
                        <Button className='!bg-white w-[85.25px] !px-0 !font-medium border-[1.35px] border-black rounded-full'>
                            Google
                        </Button>
                        <Button className='!bg-blue-buttons !text-white w-[85.25px] !px-0 !font-medium border-[1.35px] border-black rounded-full'>
                            Linkedin
                        </Button>
                        <Button className='w-[85.25px] !text-white !px-0 !font-medium border-[1.35px] border-black rounded-full bg-yellow'>
                            Microsoft
                        </Button>
                    </div>
                }
                buttonLabel="Iniciar Sesión"
                navigationFunction={handleLogin}
            >

            {/* Todo lo demás acá abajo (en el cuerpo) se pasa como children por defecto */}

                {/* 3. Input de Email (Estilo Floating Label) */}
                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                />
                
                {/* 4. Input de Contraseña (Estilo Floating Label) */}
                <TextInput
                    id="password"
                    name="password"
                    type="password"
                    label="Contraseña"
                />
            </FormComponent>
        </div>
    )
}