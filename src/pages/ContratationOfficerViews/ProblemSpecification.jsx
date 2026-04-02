import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import TextInput from "../../components/TextInput/TextInput";
import UploadElement from "../../components/UploadElement/UploadElement";
import DatePickerInput from "../../components/DatePickerInput/DatePickerInput";
import Button from "../../components/Button/Button";

export default function ProblemSpecification() {
    const [tecnicoSeleccionado, setTecnicoSeleccionado] = useState(null);

    const listaTecnicos = [
        { value: "fontaneria", label: "Fontanería" },
        { value: "electricidad", label: "Electricidad" },
        { value: "pintura", label: "Pintura" },
        { value: "plomeria", label: "Plomería" },
        { value: "cerrajeria", label: "Cerrajería" }
    ];

    return (
        // Ampliamos a max-w-7xl para acomodar cómodamente 3 columnas
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            
            {/* TÍTULO */}
            <h2 className="mb-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center">
                Describe tu <span className="text-light-blue">problema</span>
            </h2>

            {/* GRID DE 3 COLUMNAS: 1 en celular, 3 en pantallas grandes (lg) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                
                {/* --- COLUMNA 1: Datos Básicos --- */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-800 font-medium">
                            Elige el técnico que se acomoda a tus necesidades
                        </p>
                        <Dropdown 
                            label="Seleccionar"
                            options={listaTecnicos}
                            onSelect={setTecnicoSeleccionado}
                        />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-800 font-medium">
                            Indícanos tu dirección
                        </label>
                        <input 
                            type="text" 
                            placeholder="Ej. Calle 123 #45-67"
                            className="h-[42px] border border-[#90B8D9] rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-buttons text-gray-800 bg-white w-[290px]"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-800 font-medium">
                            Título del problema
                        </label>
                        <input 
                            type="text" 
                            placeholder="Ej. Fuga de agua en el lavaplatos"
                            className="h-[42px] border border-[#90B8D9] rounded-lg px-3 outline-none focus:ring-2 focus:ring-blue-buttons text-gray-800 bg-white w-[290px]"
                        />
                    </div>
                </div>

                {/* --- COLUMNA 2: Fecha --- */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-800 font-medium">
                            ¿Para cuándo necesitas el servicio?
                        </label>
                        <DatePickerInput className="w-full" />
                    </div>
                </div>

                {/* --- COLUMNA 3: Evidencia Visual --- */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 h-full">
                        <label className="text-sm text-gray-800 font-medium">
                            Evidencia visual
                        </label>
                        <UploadElement 
                            title="Sube una foto de tu problema" 
                            buttonTitle="Subir" 
                        />
                    </div>
                </div>

            </div>
            
            {/* --- FOOTER: Botón Siguiente --- */}
            <div className="flex justify-end w-full mt-16 pt-6">
                <Button className="bg-light-blue hover:bg-blue-buttons text-white px-10 py-3 rounded-lg font-bold transition-colors shadow-md">
                    Siguiente
                </Button>
            </div>
            
        </div>
    );
}