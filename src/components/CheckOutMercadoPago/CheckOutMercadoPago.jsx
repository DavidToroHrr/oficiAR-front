import { useEffect } from 'react';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import useFormNavigation from '../../hooks/useFormNavigation';

import { register } from '../../api/AuthService';

// 1. Inicializamos con tu Llave Pública de Prueba (Public Key)
initMercadoPago('TEST-a4a005de-ad51-4f9b-8eb1-40d1af54f9f0', { locale: 'es-CO' });

export default function CheckoutMercadoPago({ navigateTo }) {
    const { goBack, goNext } = useFormNavigation();

    useEffect(() => {
        const alertaMostrada = sessionStorage.getItem('alertaCheckout');
        if (!alertaMostrada) {
            alert("⚠️ Modo de prueba: Para simular un pago, selecciona Efecty, ingresa cualquier correo y haz clic en Pagar.");
            sessionStorage.setItem('alertaCheckout', 'true');
        }
    }, []);

    const initialization = { amount: 450000 };

    const customization = {
        visual: { style: { theme: 'default' } },
        paymentMethods: {
            creditCard: 'all', debitCard: 'all', ticket: 'all', 
        },
    };

    const onSubmit = async (formData) => {
        console.log("Pago aprobado simulación:", formData);
        
        // Sacamos los datos de la mochila temporal
        const draftString = sessionStorage.getItem('workerDraft');
        
        if (draftString) {
            const workerDraft = JSON.parse(draftString);
            
            try {
                // Llamamos al backend para que AHORA SÍ lo guarde en MySQL
                await register(
                    workerDraft.name, 
                    workerDraft.email, 
                    workerDraft.password, 
                    "WORKER"
                );
                
                alert("¡Worker registrado con éxito!");
                
                // Limpiamos la mochila
                sessionStorage.removeItem('workerDraft');
                
            } catch (error) {
                console.error("Error al registrar el worker en BD:", error);
                alert("Hubo un problema guardando tu cuenta: " + error.message);
                return; // Detenemos la navegación si falló el registro
            }
        }

        // Si todo salió bien, navega al home del trabajador
        if (navigateTo) goNext(navigateTo);
    };

    return (
        // Contenedor principal: Fondo gris muy claro para que la tarjeta blanca resalte
        <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center p-6 w-full relative">
            
             {/* Botón regresar — esquina superior izquierda */}
            <button 
                className="absolute top-6 left-6 text-light-blue font-semibold hover:underline cursor-pointer"
                onClick={() => goBack()}
            >
                ← Regresar
            </button>


            <div className="w-full max-w-[800px]">
                {/* Título de la vista */}
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
                    Finaliza tu suscripción
                </h2>
                
                {/* EL BRICK DE MERCADO PAGO */}
                {/* Lo envolvemos en una caja blanca con sombra para un look súper profesional */}
                <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100">
                    <Payment
                        initialization={initialization}
                        customization={customization}
                        onSubmit={onSubmit}
                    />
                </div>

            </div>

        </div>
    );
}