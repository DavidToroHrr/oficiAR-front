import FormComponent from "../../components/FormComponent/FormComponent";
import background from "../../assets/login_background_image.jpeg"
import TextInput from "../../components/TextInput/TextInput"

export default function WorkerRegister(){
   return(
      <div 
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-8 overflow-y-auto"
            style={{ backgroundImage: `url(${background})` }}
        >
            <FormComponent
                title="¡Únete a OficiAR!"
                buttonLabel="Crear cuenta"
                showForgotPassword={false}
                showSeparator={false}
                registerFooter={
                    <div>

                        {/* BLOQUE: ¿Ya tienes cuenta? + rayita / Inicia Sesión + rayita */}
                        <div className="flex justify-between items-start mb-3">

                            {/* COLUMNA IZQUIERDA: texto + rayita debajo */}
                            <div className="flex flex-col items-center">
                                <span className="font-medium text-base italic text-soft-gray mb-2">
                                    ¿Ya tienes cuenta?
                                </span>
                                <div className="w-full h-px bg-soft-gray" />
                            </div>

                            {/* COLUMNA DERECHA: enlace + rayita debajo */}
                            <div className="flex flex-col items-center">
                                <a 
                                    href="/login"
                                    className="font-medium text-base italic text-blue-buttons hover:opacity-70 transition-opacity no-underline mb-2"
                                >
                                    Inicia Sesión
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
                                <span>Aceptar términos y condiciones</span>
                            </label>

                            {/* CHECKBOX 2: ¿Quieres recibir nuevas promociones? */}
                            <label className="flex items-center gap-2 font-medium text-base italic cursor-pointer text-soft-gray h-[24px]">
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 text-light-blue bg-gray-50 border-gray-300 rounded focus:ring-light-blue focus:ring-2 cursor-pointer" 
                                />
                                <span>¿Quieres recibir nuevas promociones?</span>
                            </label>

                        </div>
                    </div>
                }
            >
                {/* Input 1: Nombre/s */}
                <TextInput id="nombres" name="nombres" type="text" label="Nombre/s" />
                {/* Input 2: Apellidos/s */}
                <TextInput id="apellidos" name="apellidos" type="text" label="Apellidos/s" />
                {/* Input 3: Email */}
                <TextInput id="email" name="email" type="email" label="Email" />
                {/* Input 4: Contraseña */}
                <TextInput id="password" name="password" type="password" label="Contraseña" />
                {/* Input 5: Confirmar Contraseña */}
                <TextInput id="confirmPassword" name="confirmPassword" type="password" label="Confirmar Contraseña" />
                {/* Input 6: Teléfono (opcional) */}
                <TextInput id="telefono" name="telefono" type="tel" label="Teléfono (opcional)" />
            </FormComponent>
        </div>
    );
    
}
