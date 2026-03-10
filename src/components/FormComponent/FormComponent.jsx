import logo from '../../assets/logo.png';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

export default function FormComponent() {
  return (
    // Tarjeta central con efecto semitransparente (Glassmorphism)
    <div className="bg-very-ligth-gray/70 backdrop-blur-md p-8 w-[425px] rounded-2xl shadow-xl">
      
      {/* Espacio para logo */}
      <div className="flex justify-center mb-6">
         <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
      </div>

      <h2 className="text-2xl font-bold text-center text-very-dark-blue mb-8">
        ¡Bienvenido a OficiAR!
      </h2>

      <form>
        {/* 3. Input de Email (Estilo Floating Label) */}
        <TextInput
          id="email"
          name="email"
          type="email"
          label="Email"
        />

        {/* 4. Input de Contraseña (Estilo Floating Label) */}
        <TextInput
          id="password"
          name="password"
          type="password"
          label="Contraseña"
        />

        {/* Enlace de recuperación */}
        <div className="flex justify-start mb-6">
          <a href="#" className="text-xs text-dark-gray italic hover:text-dark-blue transition-colors">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* Botón Principal */}
        <div className="flex justify-center mb-6">
          <button 
            type="submit" 
            className="w-[125px] text-very-ligth-gray bg-light-blue hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-light-blue/50 font-medium rounded-lg text-sm px-5 py-2 text-center transition-colors"
          >
            Ingresar
          </button>
        </div>

        {/* Separador con texto */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-dark-gray"></div>
          <span className="flex-shrink-0 mx-4 text-dark-gray text-sm italic">También</span>
          <div className="flex-grow border-t border-dark-gray"></div>
        </div>

        {/* Espacio para los botones sociales */}
        <div className="flex justify-center gap-2 w-[360px] mx-auto">
          <Button className='!bg-[#979797] !text-white w-[85.25px] !px-0 !font-medium border-[1.35px] border-black'>
            Facebook
          </Button>
          <Button className='!bg-[#FFFFFF] w-[85.25px] !px-0 !font-medium border-[1.35px] border-black'>
            Google
          </Button>
          <Button className='!bg-[#0077B5] !text-white w-[85.25px] !px-0 !font-medium border-[1.35px] border-black'>
            Linkedin
          </Button>
          <Button className='w-[85.25px] !text-white !px-0 !font-medium border-[1.35px] border-black'>
            Microsoft
          </Button>
        </div>
      </form>
    </div>
  );
}
