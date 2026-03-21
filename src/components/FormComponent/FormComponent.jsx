import logo from '../../assets/logo.png';
import Button from '../Button/Button';

export default function FormComponent({children, socialButtons, registerFooter, buttonLabel,navigationFunction,title = "¡Bienvenido a OficiAR!",showForgotPassword = true,
  showSeparator = true}) {
   return (
    /* CONTENEDOR PRINCIPAL (Glassmorphism)
      bg-white/70: Fondo blanco con 70% de opacidad (semitransparente).
      backdrop-blur-md: Aplica el filtro de desenfoque al fondo 
        (lo que haya detrás se ve borroso).
      p-8: Relleno interior (padding) de 32px por todos los lados.
      w-full max-w-[425px]: Ancho responsive y estricto de 425 píxeles.
      rounded-2xl: Bordes muy redondeados (16px de radio).
      shadow-xl: Sombra exterior grande para darle profundidad 3D y despegable 
        del fondo. */
    <div className="bg-white/70 backdrop-blur-md p-8 w-full max-w-[425px] rounded-2xl shadow-xl">
      
      {/* CONTENEDOR DEL LOGO
          flex justify-center: Usa flexbox para centrar la imagen 
            horizontalmente.
          mb-6: Margen inferior (margin-bottom) de 24px para separarlo del 
            título. */}
      <div className="flex justify-center mb-6">
         {/* IMAGEN DEL LOGO
            h-5 w-24: Altura de 20px y ancho de 96px.
            object-cover object-center: Evita que la imagen se deforme y la 
              centra en su caja.
            scale-150: Aumenta el tamaño visual de la imagen a un 150% 
              (sin cambiar el tamaño de su caja). */}
         <img src={logo} alt="OficiAR Logo" className="h-5 w-24 object-cover object-center scale-150" />
      </div>

      {/* TÍTULO
          title: Prop que permite cambiar el texto del título desde la vista
            que use este componente. Por defecto es "¡Bienvenido a OficiAR!".
          text-2xl font-bold: Texto grande (24px) y con grosor en negrita.
          text-center text-very-dark-blue: Centrado y usando la variable de 
            color de index.css.
          mb-8: Margen inferior amplio (32px) para separarlo de los inputs. */}
      <h2 className="text-2xl font-bold text-center text-very-dark-blue mb-8">
        {title}
      </h2>

      <form onSubmit={navigationFunction}>
        {/* Espacio para TextInputs */}
        {children}

        {/* ENLACE RECUPERACIÓN
            showForgotPassword: Prop booleana, true por defecto.
            El Login lo muestra, el WorkerRegister lo oculta con false. */}
        {showForgotPassword && (
          <div className="flex justify-start mb-6">
            <a href="#" className="text-xs text-dark-gray italic hover:text-dark-blue transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        )}

        {/* CONTENEDOR BOTÓN PRINCIPAL
            flex justify-center mb-6: Lo centra horizontalmente y le da margen 
              abajo. */}
        <div className="flex justify-center mb-6">
          {/* BOTÓN PRINCIPAL
              buttonLabel: Prop que permite cambiar el texto del botón desde
                la vista que use este componente. Por defecto es "Ingresar".
              min-w-[125px] w-auto: Ancho mínimo de 125px, crece si el texto
                es más largo (ej: "Crear cuenta").
              text-white bg-light-blue: Texto blanco y fondo del azul claro 
                personalizado.
              hover:bg-dark-blue: Al pasar el mouse, oscurece el fondo.
              focus:ring-4 focus:outline-none focus:ring-light-blue/50: Crea un 
                anillo luminoso del azul claro (al 50% de opacidad) cuando 
                se hace clic en él, quitando el borde negro feo del navegador.
              font-medium rounded-lg text-sm px-5 py-2: Grosor medio, bordes 
                redondeados estándar, texto pequeño con relleno horizontal (px) 
                y vertical (py).
              text-center transition-colors: Centra el texto y suaviza el cambio 
                de color al hacer hover. */}

          <Button className='min-w-[125px] w-auto text-white bg-light-blue  focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center transition-colors' type='submit' >
            {buttonLabel}
          </Button>
        </div>

        {/* SEPARADOR "También" — exclusivo del Login
            showSeparator: Prop booleana, true por defecto.
            El Login lo muestra, el WorkerRegister lo oculta con false. */}
        {showSeparator && (
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-dark-gray"></div>
            <span className="flex-shrink-0 mx-4 text-dark-gray text-sm italic">También</span>
            <div className="flex-grow border-t border-dark-gray"></div>
          </div>
        )}

        {/* Espacio para botones sociales */}
        {socialButtons}

        {/* FOOTER DEL FORMULARIO
            registerFooter: Contenido extra debajo de los botones sociales.
            El WorkerRegister pasa aquí su contenido de "¿Ya tienes cuenta?"
            y checkboxes. La rayita se maneja dentro del propio registerFooter. */}
        {registerFooter && (
          <div className="mt-4">
            {registerFooter}
          </div>
        )}
      </form>
    </div>
  );
}