import Button from "../../components/Button/Button";
import WorkerProfileCard from "../../components/WorkerProfileCard/WorkerProfileCard";

export default function NegotiationAndContact() {
    
    // 1. EL ARREGLO DE DATOS (Simulando la base de datos de OficiAR)
    // Agregué algunos datos extra para que veas cómo se llena la cuadrícula
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
        },{
            id: 4,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },{
            id: 4,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },{
            id: 5,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        },{
            id: 6,
            imagenUrl: "https://randomuser.me/api/portraits/women/33.jpg",
            nombre: "Mariana Gómez",
            descripcion: "Pintora profesional. Especialista en acabados de interiores, fachadas y estuco veneciano.",
            calificacion: "5/5"
        }
    ];

    return (
        // Contenedor principal para darle márgenes y centrar el contenido
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            
            <h2 className="mb-12 text-4xl md:text-5xl font-black text-very-dark-blue text-center">
                Selecciona a tu <span className="text-light-blue">Officer</span>
            </h2>

            {/* 2. EL GRID DE 2 COLUMNAS */}
            {/* grid-cols-1 para celulares, md:grid-cols-2 para pantallas más grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 3. EL MAPEO DINÁMICO */}
                {trabajadoresDisponibles.map((trabajador) => (
                    <WorkerProfileCard 
                        // La prop 'key' es obligatoria en React cuando usas .map()
                        key={trabajador.id} 
                        
                        // Pasamos las propiedades dinámicamente
                        imagenUrl={trabajador.imagenUrl} 
                        nombre={trabajador.nombre} 
                        descripcion={trabajador.descripcion} 
                        calificacion={trabajador.calificacion} 
                        
                        // Hacemos que el botón también sea dinámico y reconozca a quién tocaste
                        onSiguienteClick={() => console.log(`Iniciando negociación con: ${trabajador.nombre}`)}
                    />
                ))}
                
            </div>

            <div className="flex justify-start w-full mt-10">
                <Button className="bg-light-blue text-white px-8 py-2.5 rounded-lg font-medium transition-colors">
                    Regresar
                </Button>
            </div>
            
        </div>
    );
}