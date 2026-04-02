import { Outlet } from "react-router-dom";
import ContratationStepper from "../../components/ContratationStepper/ContratationStepper";
import validationOfficerImg from "../../assets/client-flow.png";
import logo from "../../assets/logo.png";

export default function ClientFlowLayout() {
    return (
        // 1. Agregamos w-full y overflow-x-hidden para evitar el scroll horizontal fantasma
        <div className="relative flex flex-col min-h-screen items-center w-full overflow-x-hidden">      
            
            {/* LOGO */}
            <img 
                src={logo} 
                alt="Logo de OficiAR" 
                className="w-[200px] md:w-[247px] object-contain mb-8 mt-8 z-10" 
            />

            {/* FONDO GLOBAL: Quitamos 'absolute', dejamos SOLO 'fixed inset-0' */}
            <img 
                src={validationOfficerImg} 
                alt="Fondo de registro" 
                className="fixed inset-0 w-full h-full object-cover -z-20"
            />
            
            {/* CAPA OSCURA: Dejamos SOLO 'fixed inset-0' */}
            <div className="fixed inset-0 bg-white/40 -z-10"></div>

            <ContratationStepper />

            {/* Contenedor del Outlet: Aseguramos el px-4 para que el chat respire en los bordes del celular */}
            <div className="flex-grow flex items-start justify-center px-4 w-full mb-10">
                <Outlet />
            </div>

        </div>
    )
}