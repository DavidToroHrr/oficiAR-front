export default function ServiceCardInfo({ nombre, descripcion, fecha, precio }) {
    return (
        <div className="flex flex-col justify-start ml-4">
            <h3 className="font-semibold text-xl md:text-2xl text-very-dark-blue mb-3">
                {nombre}
            </h3>
            <div className="font-light text-very-dark-blue text-sm md:text-lg flex flex-col gap-2">
                <p>Descripción: {descripcion}</p>
                <p>Fecha: {fecha}</p>
                <p>Precio {precio}</p>
            </div>
        </div>
    );
}