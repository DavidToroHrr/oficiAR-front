import logo from '../../assets/logo.png';
import Button from '../../components/Button/Button';

export default function FormComponent() {
  return (
    // 1. Contenedor principal con la imagen de fondo de la sala
    <div className="min-h-screen flex items-center justify-center bg-gray-200 bg-[url('/ruta-a-tu-fondo.jpg')] bg-cover bg-center">
      
      {/* 2. Tarjeta central con efecto semitransparente (Glassmorphism) */}
      <div className="bg-white/70 backdrop-blur-md p-8 w-full max-w-sm rounded-2xl shadow-xl">
        
        {/* Espacio para tu Logo */}
        <div className="flex justify-center mb-6">
           <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
        </div>

        <h2 className="text-2xl font-bold text-center text-black mb-8">
          ¡Bienvenido a OficiAR!
        </h2>

        <form>
          {/* 3. Input de Email (Estilo Floating Label) */}
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#3b82f6] appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="email" 
              className="peer-focus:font-medium absolute text-sm text-[#3b82f6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          {/* 4. Input de Contraseña (Estilo Floating Label) */}
          <div className="relative z-0 w-full mb-2 group">
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#3b82f6] appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer" 
              placeholder=" " 
              required 
            />
            <label 
              htmlFor="password" 
              className="peer-focus:font-medium absolute text-sm text-[#3b82f6] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña
            </label>
          </div>

          {/* Enlace de recuperación */}
          <div className="flex justify-start mb-6">
            <a href="#" className="text-xs text-gray-500 italic hover:text-blue-700 transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón Principal */}
          <div className="flex justify-center mb-6">
            <button 
              type="submit" 
              className="w-3/4 text-white bg-[#3b82f6] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center transition-colors"
            >
              Ingresar
            </button>
          </div>

          {/* Separador con texto */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-sm italic">También</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Espacio para tus botones sociales */}
          <div className="flex justify-center gap-2">
            <Button>

            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}