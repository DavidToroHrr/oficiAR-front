import HeaderUserServices from "../../components/HeaderUserServices/HeaderUserServices"
import Button from "../../components/Button/Button"

export default function UserServices() {
    return (
        <div>
            <HeaderUserServices>
                <Button>Inicio</Button>
                <Button>Servicios</Button>
                <Button>Historial</Button>
            </HeaderUserServices>

            {/* Título principal — Inter Extra Bold 40px según Figma
                mt-16: más espacio desde el header
                px-24: padding izquierdo que aproxima X:96 de Figma */}
            <div className="px-24 mt-16">
                <h2 className="font-['Inter'] font-extrabold text-very-dark-blue" style={{ fontSize: '30px' }}>
                    Comunicación con <span className="text-light-blue">trabajadores</span>
                </h2>
            </div>
        </div>
    )
}