import { useState, useEffect } from "react"; // 1. IMPORTAMOS LOS HOOKS DE REACT
import Button from "../../components/Button/Button";
import WorkerProfileCard from "../../components/WorkerProfileCard/WorkerProfileCard";
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import useResponsiveItems from "../../hooks/useResponsiveItems"
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function NegotiationAndContact() {
    const { goBack, goNext } = useFormNavigation();
    
    // 2. CREAMOS ESTADOS PARA MANEJAR LOS DATOS, LA CARGA Y LOS ERRORES
    const [trabajadoresDisponibles, setTrabajadoresDisponibles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const responsiveItemsPerPage = useResponsiveItems(3, 6);

    // 3. AGREGAMOS UN USEEFFECT PARA CONSUMIR LA API AL MONTAR EL COMPONENTE
    useEffect(() => {
        const fetchWorkers = async () => {
            try {
                const response = await fetch("https://my.api.mockaroo.com/oficiar.json?key=56111fd0");
                
                if (!response.ok) {
                    throw new Error("No se pudieron cargar los datos de los trabajadores.");
                }

                const data = await response.json();

                // 4. MAPEAMOS LOS DATOS DE LA API A LA ESTRUCTURA DE TUS TARJETAS
                const formattedData = data.map((worker) => ({
                    id: worker.id,
                    // Generamos una imagen aleatoria usando el ID para que sea consistente
                    imagenUrl: `https://randomuser.me/api/portraits/${worker.gender === 'Female' ? 'women' : 'men'}/${worker.id % 99}.jpg`,
                    nombre: `${worker.first_name} ${worker.last_name}`,
                    // Adaptamos la ocupación como descripción
                    descripcion: `Especialista en ${worker.occupation.toLowerCase()}. Experiencia comprobada.`,
                    // Generamos una calificación aleatoria entre 4.0 y 5.0 para el prototipo
                    calificacion: `${(Math.random() * (5 - 4) + 4).toFixed(1)}/5`
                }));

                setTrabajadoresDisponibles(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchWorkers();
    }, []); // El arreglo vacío [] asegura que solo se ejecute una vez.

    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            
            <Typography variant="h1" className="mb-12 text-center">
                Selecciona a tu <span className="text-light-blue">Officer</span>
            </Typography>

            {/* MANEJO DE ESTADOS VISUALES DE CARGA Y ERROR */}
            {isLoading && (
                <div className="text-center py-10">
                    <Typography variant="h3">Cargando perfiles...</Typography>
                </div>
            )}

            {error && (
                <div className="text-center py-10 text-red-500">
                    <Typography variant="h3">Error: {error}</Typography>
                </div>
            )}

            {/* SE MUESTRA LA LISTA SOLO CUANDO LOS DATOS ESTÁN LISTOS */}
            {!isLoading && !error && (
                <PaginatedList 
                    items={trabajadoresDisponibles} 
                    itemsPerPage={responsiveItemsPerPage} 
                    listClassName="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center" 
                    renderItem={(trabajador) => (
                        <WorkerProfileCard 
                            key={trabajador.id} 
                            imagenUrl={trabajador.imagenUrl} 
                            nombre={trabajador.nombre} 
                            descripcion={trabajador.descripcion} 
                            calificacion={trabajador.calificacion} 
                            onSiguienteClick={() => goNext("/client-flow/negotiation-and-contact")}
                        />
                    )}
                />
            )}

            <div className="flex justify-start w-full mt-10">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
                onClick={goBack}
                >
                    Regresar
                </Button>
            </div>
            
        </div>
    );
}