// Este archivo es el encargado de hacer la petición al backend para 
// iniciar sesión

// Lee la URL de la nube desde el .env, si no existe usa la local por defecto
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

const API_URL = `${BASE_URL}/api/auth`; 

export const login = async (email, password) => {
    // Aquí hacemos la petición al backend con el email y password
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Credenciales incorrectas");
    
    // Retorna el token, el rol y el email para guardarlos en el contexto
    return await response.json();
};

export const register = async (name, email, password, role) => {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
    });

    if (!response.ok) {
        // Capturamos el mensaje de error del backend (ej. "el usuario ya existe")
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Error al registrar el usuario");
    }
    
    return await response.json();
};