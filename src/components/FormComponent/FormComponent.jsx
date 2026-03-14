import logo from '../../assets/logo.png';

export default function FormComponent({children, socialButtons}) {
  return (
    /* CONTENEDOR PRINCIPAL (Glassmorphism)
      bg-white/70: Fondo blanco con 70% de opacidad (semitransparente).
      backdrop-blur-md: Aplica el filtro de desenfoque al fondo 
        (lo que haya detrás se ve borroso).
      p-8: Relleno interior (padding) de 32px por todos los lados.
      w-[425px]: Ancho fijo y estricto de 425 píxeles.
      rounded-2xl: Bordes muy redondeados (16px de radio).
      shadow-xl: Sombra exterior grande para darle profundidad 3D y despegable 
        del fondo. */
    <div className="bg-white/70 backdrop-blur-md p-8 w-[425px] rounded-2xl shadow-xl">
      
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
          text-2xl font-bold: Texto grande (24px) y con grosor en negrita.
          text-center text-very-dark-blue: Centrado y usando la variable de 
            color de index.css.
          mb-8: Margen inferior amplio (32px) para separarlo de los inputs. */}
      <h2 className="text-2xl font-bold text-center text-very-dark-blue mb-8">
        ¡Bienvenido a OficiAR!
      </h2>

      <form>
        {/* Espacio para TextInputs de correo y contraseña */}
        {children}

        {/* CONTENEDOR ENLACE RECUPERACIÓN
            flex justify-start: Alinea el contenido a la izquierda (inicio).
            mb-6: Margen inferior de 24px. */}
        <div className="flex justify-start mb-6">
          {/* ENLACE
              text-xs text-dark-gray italic: Texto muy pequeño (12px), gris 
                oscuro y en cursiva.
              hover:text-dark-blue: Al pasar el mouse, cambia al azul oscuro.
              transition-colors: Hace que el cambio de color al pasar el mouse 
                sea una animación suave. */}
          <a href="#" className="text-xs text-dark-gray italic hover:text-dark-blue transition-colors">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        {/* CONTENEDOR BOTÓN PRINCIPAL
            flex justify-center mb-6: Lo centra horizontalmente y le da margen 
              abajo. */}
        <div className="flex justify-center mb-6">
          {/* BOTÓN INGRESAR
              w-[125px]: Ancho fijo estricto de 125 píxeles.
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
          <button 
            type="submit" 
            className="w-[125px] text-white bg-light-blue hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-light-blue/50 font-medium rounded-lg text-sm px-5 py-2 text-center transition-colors"
          >
            Ingresar
          </button>
        </div>

        {/* CONTENEDOR SEPARADOR ("También")
            flex items-center: Alinea los elementos (líneas y texto) 
              verticalmente en el centro.
            my-6: Margen vertical (arriba y abajo) de 24px. */}
        <div className="flex items-center my-6">
          {/* LÍNEA IZQUIERDA
              flex-grow: Esta es la magia. Le dice a la línea "estírate y ocupa 
                todo el espacio sobrante que puedas".
              border-t border-dark-gray: Dibuja un borde superior de 1px usando 
                el color gris oscuro. */}
          <div className="flex-grow border-t border-dark-gray"></div>
          
          {/* TEXTO DEL SEPARADOR
              flex-shrink-0: Le dice al texto "no te dejes aplastar por las 
                líneas, mantén tu ancho original".
              mx-4: Margen horizontal (izquierda y derecha) de 16px para que 
                las líneas no toquen las letras.
              text-dark-gray text-sm italic: Color gris oscuro, tamaño pequeño, 
                cursiva. */}
          <span className="flex-shrink-0 mx-4 text-dark-gray text-sm italic">También</span>
          
          {/* LÍNEA DERECHA (mismas reglas que la izquierda) */}
          <div className="flex-grow border-t border-dark-gray"></div>
        </div>

        {/* Espacio para botones sociales */}
        {socialButtons}
      </form>
    </div>
  );
}