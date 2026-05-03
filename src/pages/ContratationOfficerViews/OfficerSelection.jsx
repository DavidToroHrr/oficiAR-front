import Button from "../../components/Button/Button";
import WorkerProfileCard from "../../components/WorkerProfileCard/WorkerProfileCard";

// 1. IMPORTAMOS NUESTRO COMPONENTE PAGINADOR
import PaginatedList from "../../components/PaginatedList/PaginatedList";
import useResponsiveItems from "../../hooks/useResponsiveItems"
import useFormNavigation from "../../hooks/useFormNavigation";
import Typography from "../../components/Typography/Typography";

export default function NegotiationAndContact() {
    const { goBack, goNext } = useFormNavigation();

    // 1. EL ARREGLO DE DATOS (IDs corregidos para que sean únicos)
    const trabajadoresDisponibles = [
        {
            id: 1,
            imagenUrl: "https://randomuser.me/api/portraits/men/32.jpg",
            nombre: "Victor Manuel",
            descripcion: "Certificación en Dropshipping. Próximo ingeniero biomédico, estudiante de ingeniería de sistemas.",
            calificacion: "5/5"
        },
        {
            id: 2,
            imagenUrl: "https://randomuser.me/api/portraits/women/44.jpg",
            nombre: "Ana Lucía",
            descripcion: "Técnica electricista con 5 años de experiencia en instalaciones residenciales y detección de fallas.",
            calificacion: "4.8/5"
        },
        {
            id: 3,
            imagenUrl: "https://randomuser.me/api/portraits/men/46.jpg",
            nombre: "Carlos Restrepo",
            descripcion: "Plomero experto en reparaciones de emergencia, tuberías de alta presión y mantenimiento preventivo.",
            calificacion: "4.9/5"
        },
        {
            id: 4,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },
        {
            id: 5,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez (2)",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },
        {
            id: 6,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez (3)",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },
        {
            id: 7,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez (4)",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },
        {
            id: 8,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez (5)",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        }
    ];

    const responsiveItemsPerPage= useResponsiveItems(3,6);

    return (
        // Contenedor principal para darle márgenes y centrar el contenido
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            
            {/* CAMBIO A TYPOGRAPHY: 
                Eliminamos text-4xl, md:text-5xl y font-black. 
                Mantenemos mb-12 y text-center para el layout */}
            <Typography variant="h1" className="mb-12 text-center">
                Selecciona a tu <span className="text-light-blue">Officer</span>
            </Typography>

            {/* 2. REEMPLAZAMOS EL GRID Y EL MAP POR PAGINATEDLIST */}
            <PaginatedList 
                items={trabajadoresDisponibles} 
                itemsPerPage={responsiveItemsPerPage} // 4 tarjetas por página (2 filas de 2 columnas)
                listClassName="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center" // Tus clases de grid intactas
                renderItem={(trabajador) => (
                    <WorkerProfileCard 
                        key={trabajador.id} 
                        imagenUrl={trabajador.imagenUrl} 
                        nombre={trabajador.nombre} 
                        descripcion={trabajador.descripcion} 
                        calificacion={trabajador.calificacion} 
                        onSiguienteClick={()=>goNext("/client-flow/negotiation-and-contact")}
                    />
                )}
            />

            {/* Botón de regresar inferior */}
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