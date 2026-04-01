import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"

export default function UserServices() {
    return (
        <div>
            {/* Header reutilizado con navegación de usuario logueado
                Inicio, Servicios e Historial según el mockup. */}
            <Header>
                <Button>
                    Inicio
                </Button>
                <Button>
                    Servicios
                </Button>
                <Button>
                    Historial
                </Button>
            </Header>

            {/* Contenido de la página — se construye en siguiente iteración */}
            <div className="p-8">
                <h1 className="text-3xl font-black text-very-dark-blue">
                    Comunicación con <span className="text-light-blue">trabajadores</span>
                </h1>
            </div>
        </div>
    )
}