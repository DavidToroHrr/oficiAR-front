import { useNavigate } from "react-router-dom";

export default function useFormNavigation() {
    const navigate = useNavigate();

    // 1. EL BOTÓN REGRESAR (Siempre hace lo mismo: volver un paso atrás)
    const goBack = () => {
        navigate(-1);
    };

    // 2. EL BOTÓN SIGUIENTE (Es dinámico)
    // Recibe a dónde quieres ir (targetPath) y, opcionalmente, una función de validación
    const goNext = (targetPath, validateFn = null) => {
        
        // Si la pantalla actual nos mandó una función de validación, la ejecutamos primero
        if (validateFn) {
            const isValid = validateFn(); // Ejecuta el "portero"
            
            if (!isValid) {
                // Si la validación falla (retorna false), cortamos la ejecución aquí
                return; 
            }
        }

        // Si no hay validación, o si la validación pasó exitosamente, navegamos
        navigate(targetPath);
    };

    return { goBack, goNext };
}