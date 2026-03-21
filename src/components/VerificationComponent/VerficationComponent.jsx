import { Outlet } from "react-router-dom";
import RegistrationStepper from "../../components/RegistrationStepper/RegistrationStepper";


// IMPORTANTE: Mudamos la importación de la imagen para acá
import validationOfficerImg from "../../assets/validation-officer.png";

export default function VerificationComponent() {
    return (
        // min-h-screen asegura que este div mida exactamente el 100% del alto de tu monitor
        <div className="relative flex flex-col min-h-screen">      
            
            {/* --- 1. EL FONDO GLOBAL (Cubre toda la pantalla) --- */}
            {/* fixed hace que la imagen se quede quieta aunque hagas scroll */}
            <img 
                src={validationOfficerImg} 
                alt="Fondo de registro" 
                className="absolute inset-0 w-full h-full object-cover -z-20 fixed"
            />
            {/* Capa oscura semitransparente para que el Stepper y el texto se lean bien */}
            <div className="absolute inset-0 bg-black/40 -z-10 fixed"></div>

            {/* --- 2. EL CONTENIDO FLOTANTE --- */}
            <div className="relative z-10 flex flex-col flex-grow ">
                {/* El Stepper ahora flota SOBRE la imagen */}
                <RegistrationStepper />
                
                {/* Este div empuja la tarjeta blanca para que quede bien centrada */}
                <div className="flex-grow flex items-center justify-center px-4 w-full">
                   
                    <Outlet />
                    
                </div>
            </div>

        </div>
    );
}