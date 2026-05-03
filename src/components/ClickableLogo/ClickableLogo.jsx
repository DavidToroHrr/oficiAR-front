import logo from '../../assets/logo.svg'
import useFormNavigation from '../../hooks/useFormNavigation'

// Recibe navigateTo para ir a una ruta específica
// o usaGoBack=true para ir a la página anterior
export default function ClickableLogo({ navigateTo, useGoBack = false }) {
    const { goBack, goNext } = useFormNavigation();

    const handleClick = () => {
        if (useGoBack) {
            goBack();
        } else {
            goNext(navigateTo);
        }
    };

    return (
        <div 
            className="flex items-center justify-center cursor-pointer z-50 ml-4 md:ml-0"
            onClick={handleClick}
        >
            <img 
                src={logo} 
                alt="OficiAR Logo" 
                className="h-5 w-24 object-cover object-center scale-150" 
            />
        </div>
    );
}