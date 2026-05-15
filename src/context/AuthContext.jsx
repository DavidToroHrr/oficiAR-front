// Este archivo es el corazón de la autenticación en la app. 
// Aquí guardaremos el token y el rol del usuario y también las funciones 
// para iniciar y cerrar sesión
import { createContext, useState, useContext, useEffect } from 'react';

// Creamos el espacio para guardar los datos
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Aquí guardaremos el objeto con el token y el rol
    const [user, setUser] = useState(null);

    // Esto es para que si el usuario refresca la página, 
    // no pierda la sesión si el token sigue en el navegador
    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        
        if (token && role) {
        setUser({ token, role });
        }
    }, []);

    // Esta función la llamamos cuando el backend responda OK a la petición
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
        localStorage.setItem('role', userData.role);
    };

    // Esta función borrará todo al salir
    const logout = () => {
        setUser(null);
        localStorage.clear();
    };

    return (
        // Aquí es donde compartimos el token, el rol y las funciones con toda la app
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Este es el atajo para usar el contexto en otros archivos
export const useAuth = () => useContext(AuthContext);