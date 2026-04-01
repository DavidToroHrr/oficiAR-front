import { Outlet } from "react-router-dom";
import ContratationStepper from "../../components/ContratationStepper/ContratationStepper";


// IMPORTANTE: Mudamos la importación de la imagen para acá
import validationOfficerImg from "../../assets/client-flow.png";
import logo from "../../assets/logo.png";
export default function ClientFlowLayout(){
    return(
        <div className="relative flex flex-col min-h-screen items-center">      
            
            {/* --- 1. EL FONDO GLOBAL (Cubre toda la pantalla) --- */}
            {/* fixed hace que la imagen se quede quieta aunque hagas scroll */}
            <img 
                src={logo} 
                alt="Logo de OficiAR" 
                className="w-[247px] h-[55px] object-contain mb-8 mt-8" 
            />

            <img 
                src={validationOfficerImg} 
                alt="Fondo de registro" 
                className="absolute inset-0 w-full h-full object-cover -z-20 fixed "
            />

            
            {/* Capa oscura semitransparente para que el Stepper y el texto se lean bien */}
            <div className="absolute inset-0 bg-white/40 -z-10 fixed"></div>

            
                {/* El Stepper ahora flota SOBRE la imagen */}
                <ContratationStepper />

            

                {/* Este div empuja la tarjeta blanca para que quede bien centrada */}
                <div className="flex-grow flex items-start justify-center px-4 w-full">
                   
                    <Outlet />
                    
                </div>



            

        </div>
    )
}