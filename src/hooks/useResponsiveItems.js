import { useState, useEffect } from "react";

// Recibe cuántos quieres en móvil y cuántos en PC
export default function useResponsiveItems(mobileCount, desktopCount) {
    const [itemsCount, setItemsCount] = useState(desktopCount);

    useEffect(() => {
        const revisarAnchoPantalla = () => {
            if (window.innerWidth < 768) {
                setItemsCount(mobileCount);
            } else {
                setItemsCount(desktopCount);
            }
        };

        // Ejecutar al cargar
        revisarAnchoPantalla();

        // Escuchar cambios de pantalla
        window.addEventListener("resize", revisarAnchoPantalla);

        // Limpiar el evento
        return () => window.removeEventListener("resize", revisarAnchoPantalla);
    }, [mobileCount, desktopCount]);

    return itemsCount;
}