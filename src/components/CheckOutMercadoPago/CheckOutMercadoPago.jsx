import { initMercadoPago, Payment } from '@mercadopago/sdk-react';

// 1. Inicializamos con tu Llave Pública de Prueba (Public Key)
initMercadoPago('TEST-a4a005de-ad51-4f9b-8eb1-40d1af54f9f0', { locale: 'es-CO' });

export default function CheckoutMercadoPago() {
    
    // 2. Configuramos el monto visual ($450.000 COP del Plan Pro Anual)
    const initialization = {
        amount: 450000, 
    };

    // 3. Configuramos cómo se ve y qué métodos de pago aceptamos
    const customization = {
        visual: {
            style: {
                theme: 'default', // 'default' es blanco limpio. Puedes usar 'dark' si prefieres.
            },
        },
        paymentMethods: {
            creditCard: 'all',
            debitCard: 'all',
            ticket: 'all', // Esto habilita pagos en efectivo (como Efecty)
        },
    };

    // 4. Función que se dispara al darle clic al botón azul de Pagar
    const onSubmit = async (formData) => {
        // Como aún no conectamos el servidor, solo simulamos la captura en consola
        console.log("Datos capturados listos para el backend:", formData);
        alert("¡Formulario visual funcionando perfecto! El siguiente paso será conectar el Backend.");
    };

    return (
        // Contenedor principal: Fondo gris muy claro para que la tarjeta blanca resalte
        <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center p-6 w-full">
            
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