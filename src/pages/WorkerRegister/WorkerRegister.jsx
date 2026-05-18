import { useState } from "react"; 
import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"
import TextInput from "../../components/TextInput/TextInput"
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography/Typography";

export default function WorkerRegister(){
    const navigate = useNavigate();

    // Estado inicial (vacío) para capturar todo lo que se escriba en los inputs
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Función para actualizar el estado del formulario letra por letra
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // La función de navegación ahora guarda en sessionStorage
    function navigationForm(e){
        e.preventDefault(); // Evita que la página se recargue
        
        // Verificamos que las contraseñas sean iguales
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, verifica.");
            return;
        }

        // Unimos el nombre para el backend
        const fullName = `${formData.nombres} ${formData.apellidos}`.trim();

        // Armamos el paquete de datos
        const workerDraft = {
            name: fullName,
            email: formData.email,
            password: formData.password
        };

        // Lo guardamos en session storage (la mochila) para hacer la petición
        // En el archivo donde se simula el pago de la membresía del trajador
        sessionStorage.setItem('workerDraft', JSON.stringify(workerDraft));
        console.log("Datos guardados en la mochila para pagar después:", workerDraft);

        // Viajamos a la siguiente vista de la simulación
        navigate("/validation");
    }

    return(
      <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 overflow-y-auto"
            style={{ backgroundImage: `url(${background})` }}
        >
            <FormComponent
                navigateTo="/"
                title="¡Hazte Officer!"
                buttonLabel="Registrarse"
                navigationFunction={navigationForm}
                showForgotPassword={false}
                showSeparator={false}
                registerFooter={
                    <div>

                        {/* BLOQUE: ¿Ya tienes cuenta? + rayita / Inicia Sesión + rayita */}
                        <div className="flex justify-between items-start mb-3">

                            {/* COLUMNA IZQUIERDA: texto + rayita debajo */}
                            <div className="flex flex-col items-center">
                                <Typography variant="body" className="font-medium text-base italic text-soft-gray mb-2">
                                    ¿Ya tienes cuenta?
                                </Typography>

                                <div className="w-full h-px bg-soft-gray" />
                            </div>

                            {/* COLUMNA DERECHA: enlace + rayita debajo */}
                            <div className="flex flex-col items-center">
                                <a 
                                    href="/login"
                                    className="font-medium text-base italic text-light-blue hover:opacity-70 transition-opacity no-underline mb-2"
                                >
                                    <Typography variant="body" className="font-medium text-base italic text-light-blue">
                                        Inicia Sesión
                                    </Typography>
                                </a>
                                <div className="w-full h-px bg-soft-gray" />
                            </div>

                        </div>

                        {/* CHECKBOXES centrados
                            W-281 H-48 según Figma.
                            mx-auto: centrado horizontalmente. */}
                        <div className="flex flex-col gap-3 mx-auto w-full">

                            {/* CHECKBOX 1: Aceptar términos y condiciones */}
                            <label className="flex items-center gap-2 font-medium text-base italic cursor-pointer text-soft-gray h-[24px]">
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 text-light-blue bg-gray-50 border-gray-300 rounded focus:ring-light-blue focus:ring-2 cursor-pointer"
                                />
                                <Typography variant="body" className="font-medium text-base italic text-soft-gray">
                                    Aceptar términos y condiciones
                                </Typography>
                            </label>

                            {/* CHECKBOX 2: ¿Quieres recibir nuevas promociones? */}
                            <label className="flex items-center gap-2 font-medium text-base italic cursor-pointer text-soft-gray h-[24px]">
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 text-light-blue bg-gray-50 border-gray-300 rounded focus:ring-light-blue focus:ring-2 cursor-pointer" 
                                />
                                <Typography variant="body" className="font-medium text-base italic text-soft-gray">
                                    ¿Quieres recibir nuevas promociones?
                                </Typography>
                            </label>

                        </div>
                    </div>
                }
            >
                {/* Input 1: Nombre/s */}
                <TextInput id="nombres" name="nombres" type="text" label="Nombre/s" value={formData.nombres} 
                    onChange={handleChange} 
                    required />
                {/* Input 2: Apellidos/s */}
                <TextInput id="apellidos" name="apellidos" type="text" label="Apellidos/s" value={formData.apellidos} 
                    onChange={handleChange} 
                    required />
                {/* Input 3: Email */}
                <TextInput id="email" name="email" type="email" label="Email" value={formData.email} 
                    onChange={handleChange} 
                    required />
                {/* Input 4: Contraseña */}
                <TextInput id="password" name="password" type="password" label="Contraseña" value={formData.password} 
                    onChange={handleChange} 
                    required />
                {/* Input 5: Confirmar Contraseña */}
                <TextInput id="confirmPassword" name="confirmPassword" type="password" label="Confirmar Contraseña" value={formData.confirmPassword} 
                    onChange={handleChange} 
                    required />
            </FormComponent>

        </div>
    );
    
}
