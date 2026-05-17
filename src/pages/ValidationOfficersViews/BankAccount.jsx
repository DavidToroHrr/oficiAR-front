import { useState } from "react";
import logoImg from "../../assets/logo.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function BankAccount() {
    const { goBack,goNext } = useFormNavigation();
    // 1. Estados para guardar toda la información del formulario
    const [bancoSeleccionado, setBancoSeleccionado] = useState(null);
    const [numeroIdentificacion, setNumeroIdentificacion] = useState("");
    const [paisSeleccionado, setPaisSeleccionado] = useState(null);
    const [numeroCuenta, setNumeroCuenta] = useState(""); 
    const [tipoDocumentoSeleccionado, setTipoDocumentoSeleccionado] = useState(null);

    // 2. Opciones para los Dropdowns
    const listaBancos = [
        { value: "bancolombia", label: "Bancolombia" },
        { value: "davivienda", label: "Davivienda" },
        { value: "nequi", label: "Nequi" },
        { value: "daviplata", label: "Daviplata" },
        { value: "caja_social", label: "Banco Caja Social" }
    ];

    const listaPaises = [
        { value: "co", label: "Colombia" },
        { value: "mx", label: "México" },
        { value: "pe", label: "Perú" }
    ];

    const listaTiposDocumento = [
        { value: "cc", label: "Cédula de Ciudadanía" },
        { value: "ce", label: "Cédula de Extranjería" },
        { value: "pasaporte", label: "Pasaporte" }
    ];

    return (
        // TU CONTENEDOR ORIGINAL: Con el fondo blanco semitransparente, sombras y bordes redondeados
        <div className="flex flex-col items-center w-full max-w-[955px] mx-auto p-6 bg-white/70 rounded-2xl shadow-xl mb-10">
            
            {/* TU LOGO */}
            <img 
                src={logoImg} 
                alt="Logo de OficiAR" 
                className="w-[247px] h-[55px] object-contain mb-8 cursor-pointer"
                onClick={() => goBack()}
            />

            <Typography variant="h2" className="mb-10 text-center">
                ¡Tus datos bancarios!
            </Typography>

            {/* EL FORMULARIO: Limitamos el ancho a 400px para que los inputs no se vean deformes en PC */}
            <div className="flex flex-col w-full max-w-[290px] gap-5">

                {/* --- 1. BANCO (Dropdown) --- */}
                <div className="flex flex-col items-center w-full">
                    <Typography variant="subtitle" className="mb-1 text-sm">Banco</Typography>
                    <Dropdown 
                        label="Seleccionar Banco" 
                        options={listaBancos} 
                        onSelect={setBancoSeleccionado} 
                    />
                </div>

                {/* --- 2. NÚMERO DE IDENTIFICACIÓN (Input) --- */}
                <div className="flex flex-col items-center w-full">
                    <Typography variant="subtitle" className="mb-1 text-sm">Número de identificación</Typography>
                    <input 
                        type="text" 
                        value={numeroIdentificacion}
                        onChange={(e) => setNumeroIdentificacion(e.target.value)}
                        className="w-full h-[42px] border border-[#90B8D9] rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-buttons text-gray-800 bg-white"
                    />
                </div>

                {/* --- 3. PAÍS (Dropdown) --- */}
                <div className="flex flex-col items-center w-full">
                    <Typography variant="subtitle" className="mb-1 text-sm">País</Typography>
                    <Dropdown 
                        label="Seleccionar País" 
                        options={listaPaises} 
                        onSelect={setPaisSeleccionado} 
                    />
                </div>

                {/* --- 4. NÚMERO DE CUENTA (Input) --- */}
                <div className="flex flex-col items-center w-full">
                    <Typography variant="subtitle" className="mb-1 text-sm">Número de cuenta</Typography>
                    <input 
                        type="text" 
                        value={numeroCuenta}
                        onChange={(e) => setNumeroCuenta(e.target.value)}
                        className="w-full h-[42px] border border-[#90B8D9] rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-buttons text-gray-800 bg-white"
                    />
                </div>

                {/* --- 5. TIPO DE DOCUMENTO (Dropdown) --- */}
                <div className="flex flex-col items-center w-full">
                    <Typography variant="subtitle" className="mb-1 text-sm">Tipo de Documento</Typography>
                    <Dropdown 
                        label="Seleccionar Documento" 
                        options={listaTiposDocumento} 
                        onSelect={setTipoDocumentoSeleccionado} 
                    />
                </div>

            </div>

            <div className="flex justify-end w-full">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors mt-4"
                onClick={()=>goNext("/pricing")}>
                    <Typography variant="body" className="text-white font-medium">
                        Ir a pagar
                    </Typography>
                </Button>
            </div>
            
        </div>
    );
}