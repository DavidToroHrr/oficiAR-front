import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"
import TextInput from "../../components/TextInput/TextInput"
import Button from "../../components/Button/Button"

import { useState } from "react"; // Para capturar los inputs
import { useNavigate } from "react-router-dom"; // Para saltar de página

// entre llaves porque no es un export default, sino un export const
import { useAuth } from "../../context/AuthContext"; // Context para guardar el token y el rol
import { login as AuthService } from "../../api/AuthService"; // Para conexión con el backend

export default function Login(){
    // Estado local para guardar el email y la contraseña mientras el usuario 
    // los escribe
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();

    // Función para actualizar los datos mientras se escribe
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    // Async porque hace una petición al backend y debe esperar la respuesta
    // antes de validar las credenciales y poder navegar
    async function handleLogin(e) {
        // Si el evento existe, evitamos que la página se recargue
        if (e && e.preventDefault) e.preventDefault();

        try {
            // Llamamos al backend
            const response = await AuthService(credentials.email, credentials.password);
            
            // Guardamos en el AuthContext 
            login({
                token: response.token,
                role: response.role,
                username: response.username
            });

            // Navegamos según el rol que nos dio el backend
            if (response.role === "WORKER") {
                navigate("/officers-home");
            } else {
                navigate("/users-home");
            }

        } catch (error) {
            alert("Error al iniciar sesión: " + error.message);
        }
    }

    return(
        // Usamos el contenedor principal para definir el fondo
        <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* El formulario ahora se dibujará sobre este fondo y centrado */}
            <FormComponent
                // Espacio para los botones sociales como prop del FormComponent
                navigateTo="/"
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

                {/* Input de Email (Estilo Floating Label) */}
                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                
                {/* Input de Contraseña (Estilo Floating Label) */}
                <TextInput
                    id="password"
                    name="password"
                    type="password"
                    label="Contraseña"
                    value={credentials.password}
                    onChange={handleChange}
                />
            </FormComponent>
        </div>
    )
}