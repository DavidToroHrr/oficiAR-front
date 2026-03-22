import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import logoImg from '../../assets/logo.png';
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

export default function SpecificationOfficer() {
    // Aquí guardaremos el oficio que el trabajador elija para luego mandarlo a la base de datos
    const [oficioSeleccionado, setOficioSeleccionado] = useState(null);

    // Definimos la lista de opciones (Esto podría venir de tu Base de Datos en el futuro)
    const listaDeOficios = [
        { value: "plomero", label: "Plomería" },
        { value: "electricista", label: "Electricidad" },
        { value: "carpintero", label: "Carpintería" },
        { value: "aseo", label: "Servicios de Aseo" },
    ];

    return (
        <div className="flex flex-col items-center w-full max-w-[955px] mx-auto p-6 bg-white/70 rounded-2xl shadow-xl mb-10" >
            <img 
                src={logoImg} 
                alt="Logo de OficiAR" 
                className="w-[247px] h-[55px] object-contain mb-6" 
            />
            <h2 className="text-2xl font-bold mb-10 text-very-dark-blue">¡Háblanos de tí!</h2>
                {/* Llamamos al componente reutilizable */}

            <div>

                <div className="flex flex-col items-center mb-10 w-full">
                <p className="mb-2">Elige tu oficio</p>
                <Dropdown 
                    label="Selecciona un oficio" 
                    options={listaDeOficios} 
                    onSelect={(opcion) => setOficioSeleccionado(opcion)}
                />
                </div>
            
            
                <div className="flex flex-col items-center mb-10 w-full">
                    <p className="mb-2">Cuéntamos de tus especialidades</p>
                    <textarea 
                        className="h-[100px] w-full border-0 rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-buttons outline-none" 
                        placeholder="Ej: Tengo 5 años de experiencia instalando tuberías..."
                    />
                </div>
                

            </div>
        
            <div className="flex justify-end w-full">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                    Continuar
                </Button>
            </div>
        </div>
    )
}