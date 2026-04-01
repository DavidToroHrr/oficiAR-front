import { useState, useRef, useEffect } from "react";

export default function InteractiveChat() {
    // 1. EL ESTADO DEL CHAT (La "Falsa" Base de Datos)
    const [messages, setMessages] = useState([
        { id: 1, text: "¿Tiene disponibilidad para el próximo miércoles?", sender: "them", time: "7:20" },
        { id: 2, text: "Cuento con disponibilidad a las 9am.", sender: "me", time: "7:20" },
        { id: 3, text: "Perfecto, queda agendado para el miércoles a las 9 am", sender: "them", time: "7:20" },
        { id: 4, text: "¡Muchas gracias!", sender: "me", time: "7:20" }
    ]);
    
    const [inputValue, setInputValue] = useState("");
    const chatContainerRef = useRef(null);

    // 2. FUNCIÓN PARA ENVIAR MENSAJES
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return; // Evita enviar mensajes vacíos

        const newMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "me", // Todo lo que escribas será tuyo
            // Obtenemos la hora actual real de Manizales para darle más realismo
            time: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
        };

        // Agregamos el mensaje nuevo al final del arreglo
        setMessages([...messages, newMessage]);
        setInputValue(""); // Limpiamos el input
    };

    // 3. AUTO-SCROLL (Para que siempre baje al último mensaje)
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        // CONTENEDOR PRINCIPAL: Simula la pantalla de un celular o un widget flotante
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[700px] border border-gray-200">
            
            {/* --- HEADER AZUL --- */}
            <div className="bg-light-blue px-4 py-3 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    {/* Avatar del Trabajador (Hernán) */}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-light-blue font-bold text-xl">
                        H
                    </div>
                    <div>
                        <h3 className="font-bold text-lg leading-tight">Hernán J.</h3>
                        <div className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                            <span className="text-xs font-medium text-green-100">Online</span>
                        </div>
                    </div>
                </div>
                {/* Botón minimizar */}
                <button className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6"></path></svg>
                </button>
            </div>

            {/* --- ÁREA DE MENSAJES (Scrollable) --- */}
            {/* Usamos bg-very-light-gray para el fondo suave del chat */}
            <div 
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#F8F9FA]"
            >
                {messages.map((msg) => {
                    const isMe = msg.sender === "me";
                    
                    return (
                        <div key={msg.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                            <div className={`flex flex-col max-w-[80%] ${isMe ? "items-end" : "items-start"}`}>
                                
                                {/* El Globo del Mensaje */}
                                <div 
                                    className={`px-4 py-3 shadow-sm text-sm
                                        ${isMe 
                                            // Mis mensajes: Gris claro, texto oscuro, borde redondeado menos la esquina inferior derecha
                                            ? "bg-very-light-gray text-very-dark-blue rounded-2xl rounded-br-none" 
                                            // Sus mensajes: Azul muy oscuro, texto blanco, borde redondeado menos la esquina inferior izquierda
                                            : "bg-very-dark-blue text-white rounded-2xl rounded-bl-none"
                                        }
                                    `}
                                >
                                    {msg.text}
                                </div>
                                
                                {/* Hora y Checkmark */}
                                <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1 px-1">
                                    {msg.time} {isMe && <span className="text-light-blue">✓✓</span>}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* --- ÁREA DE INPUT Y CHIPS DE RESPUESTA RÁPIDA --- */}
            <div className="bg-white p-3 border-t border-gray-100">
                
                {/* Chips de sugerencias */}
                <div className="flex gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide">
                    <button className="whitespace-nowrap bg-very-light-gray hover:bg-gray-200 text-very-dark-blue text-xs px-3 py-1.5 rounded-full font-medium transition-colors">
                        🤔 ¿Tienes alguna necesidad?
                    </button>
                    <button className="whitespace-nowrap bg-very-light-gray hover:bg-gray-200 text-very-dark-blue text-xs px-3 py-1.5 rounded-full font-medium transition-colors">
                        💰 Precio
                    </button>
                    <button className="whitespace-nowrap bg-very-light-gray hover:bg-gray-200 text-very-dark-blue text-xs px-3 py-1.5 rounded-full font-medium transition-colors">
                        🙋 FAQs
                    </button>
                </div>

                {/* Formulario de Input */}
                <form onSubmit={handleSendMessage} className="relative flex items-center">
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Escribe tu mensaje aquí..." 
                        className="w-full bg-[#F0F2F5] text-very-dark-blue text-sm rounded-xl pl-4 pr-12 py-3 outline-none focus:ring-1 focus:ring-light-blue"
                    />
                    
                    {/* Botón de Enviar (Flecha amarilla) */}
                    {/* Usamos tu color --color-yellow exacto */}
                    <button 
                        type="submit" 
                        disabled={!inputValue.trim()} // Se desactiva si está vacío
                        className="absolute right-2 p-2 text-yellow hover:scale-110 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </button>
                </form>

            </div>
        </div>
    );
}