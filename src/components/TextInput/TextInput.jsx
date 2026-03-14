export default function TextInput({ id, name, type, label }) {
  return (
    /* 1. Contenedor principal
    relative: Sirve de "ancla". Obliga a que la etiqueta (que es absolute) 
      se mueva dentro de esta caja y no salga volando por toda la pantalla.
    z-0: Lo pone en un nivel de profundidad base.
    w-full mb-6: Hace que ocupe todo el ancho disponible y le da un margen 
      inferior para separarlo del siguiente campo. 
    group: Permite aplicar estilos a los elementos hijos si el usuario 
      interactúa con esta caja contenedora. */
    <div className="relative z-0 w-full mb-6 group">
      
      {/* 2. Campo de texto */}
      {/* Atributos HTML:
        type: Define si el teclado/formato es texto normal, contraseña 
          (puntos ocultos) o email.
        name: Es el nombre de la variable con la que se enviará la información 
          a la base de datos.
        placeholder=" ": Truco clave. Es un espacio en blanco literal. Tailwind 
          necesita que haya "algo" aquí para saber si el campo está vacío o no.
        required: Atributo nativo que impide que el usuario envíe el formulario 
          si este campo está vacío. */}
      {/* Clases Tailwind:
        block w-full py-2.5 px-0: Lo hace un bloque de ancho completo con 
          espacio arriba/abajo y sin espacio a los lados.
        bg-transparent border-0 border-b-2 border-light-blue: Le quita el fondo 
          y todos los bordes, excepto una línea gruesa abajo con tu azul claro.
        appearance-none focus:outline-none focus:ring-0: Elimina los bordes 
          azules feos que ponen navegadores como Chrome por defecto al hacer 
          clic.
        focus:border-dark-blue: Al hacer clic (focus), la línea inferior cambia 
          al azul oscuro.
        peer: ¡LA CLASE MÁS IMPORTANTE! Convierte a este input en un 
          "comunicador". Le avisa a su etiqueta vecina si está seleccionado o 
          vacío. */}
      <input 
        type={type} 
        name={name} 
        id={id} 
        className="block py-2.5 px-0 w-full text-sm text-very-dark-blue bg-transparent border-0 border-b-2 border-light-blue appearance-none focus:outline-none focus:ring-0 focus:border-dark-blue peer" 
        placeholder=" " 
        required 
      />

      {/* 3. LA ETIQUETA ANIMADA (LABEL) */}
      {/* Atributos HTML:
          htmlFor: Es el equivalente en React al atributo 'for' de HTML. 
            Vincula esta palabra con el input. Si el usuario toca la palabra 
            "Email", el input se activa automáticamente. */}
      {/* Clases Tailwind (Estructura base):
          absolute top-3 -z-10: Saca el texto del orden normal y lo posiciona 
            "detrás" del input para que no estorbe al escribir.
          duration-300 transform origin-[0]: Configura la animación para que 
            cualquier movimiento dure 300 milisegundos de forma suave, partiendo
            desde la izquierda. */}
      {/* Clases Tailwind (Reaccionando al "peer" del input):
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0: 
            Cuando el input ESTÁ VACÍO (muestra el placeholder " "), la etiqueta 
            tiene tamaño normal y se queda abajo.
          peer-focus:-translate-y-6 peer-focus:scale-75: Cuando se hace CLIC en 
            el input, la etiqueta sube en el eje Y y se encoge a un 75% de su 
            tamaño.
          peer-focus:text-dark-blue peer-focus:font-medium: Al hacer clic, 
            cambia al azul oscuro y se pone un poco más negrita. */}
      <label 
        htmlFor={id} 
        className="peer-focus:font-medium absolute text-sm text-light-blue duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-dark-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}