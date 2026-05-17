import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"
import TextInput from "../../components/TextInput/TextInput"
import { useNavigate } from "react-router-dom";
import Typography from "../../components/Typography/Typography";

import { useState } from "react";
import { register } from "../../api/AuthService";

export default function UserRegister(){
    const navigate = useNavigate();

    // Estados para capturar los inputs
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Función para actualizar el estado cada vez que se escribe en un input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Función de envío
    const navigationForm = async (e) => {
        e.preventDefault(); 
        
        // Validación básica de contraseñas en el front
        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, verifica.");
            return;
        }

        // Unimos nombres y apellidos porque el backend solo recibe "name"
        const fullName = `${formData.nombres} ${formData.apellidos}`.trim();

        try {
            // Llamamos al backend pasando los datos y quemando el rol "CLIENT"
            const response = await register(fullName, formData.email, formData.password, "CLIENT");
            
            console.log("Registro exitoso:", response);
            alert("¡Usuario registrado con éxito!"); // mensaje de éxito
                        
        } catch (error) {
            console.error("Error en el registro:", error);
            alert(error.message); // Mostrará el error (ej: "usuario ya registrado")
        }
    }

   return(
      <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 overflow-y-auto"
            style={{ backgroundImage: `url(${background})` }}
        >
            <FormComponent
                title="¡Únete a OficiAR!"
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
                <TextInput id="nombres" name="nombres" type="text" label="Nombre/s" value={formData.nombres} onChange={handleChange} required />
                {/* Input 2: Apellidos/s */}
                <TextInput id="apellidos" name="apellidos" type="text" label="Apellidos/s" value={formData.apellidos} onChange={handleChange} required />
                {/* Input 3: Email */}
                <TextInput id="email" name="email" type="email" label="Email" value={formData.email} onChange={handleChange} required />
                {/* Input 4: Contraseña */}
                <TextInput id="password" name="password" type="password" label="Contraseña" value={formData.password} onChange={handleChange} required />
                {/* Input 5: Confirmar Contraseña */}
                <TextInput id="confirmPassword" name="confirmPassword" type="password" label="Confirmar Contraseña" value={formData.confirmPassword} onChange={handleChange} required />
            </FormComponent>

        </div>
    );
    
}
