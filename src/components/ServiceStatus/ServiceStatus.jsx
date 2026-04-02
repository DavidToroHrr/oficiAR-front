const estados = {
    "Caducado":             "text-status-caducado",
    "En discusión":         "text-status-discusion",
    "Finalizado":           "text-status-finalizado",
    "En ejecución":         "text-status-ejecucion",
    "Liberación de pago":   "text-status-ejecucion",
};

export default function ServiceStatus({ estado }) {
    const colorClase = estados[estado] || "text-dark-gray";
    const esLiberacion = estado === "Liberación de pago";

    return (
        <span className={`absolute top-1 right-1 font-semibold text-sm md:text-base text-right ${colorClase}`}>
            {esLiberacion ? (
                <>
                    <span className="hidden md:inline">Liberación de pago</span>
                    <span className="md:hidden text-center block">
                        Liberación<br />de pago
                    </span>
                </>
            ) : (
                estado
            )}
        </span>
    );
}