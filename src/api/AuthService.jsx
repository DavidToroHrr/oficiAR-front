// Este archivo es el encargado de hacer la petición al backend para 
// iniciar sesión

const API_URL = "http://localhost:8080/api/auth"; 

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