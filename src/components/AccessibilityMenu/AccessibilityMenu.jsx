import { useState } from "react";
import { Accessibility, X, ZoomIn, ZoomOut } from "lucide-react";

export default function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100);

    const increaseFontSize = () => {
        if (fontSize >= 130) return;
        const newSize = fontSize + 10;
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
    };

    const decreaseFontSize = () => {
        if (fontSize <= 80) return;
        const newSize = fontSize - 10;
        setFontSize(newSize);
        document.documentElement.style.fontSize = `${newSize}%`;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

            {isOpen && (
                <div
                    role="dialog"
                    aria-label="Menú de accesibilidad"
                    className="bg-white rounded-[8px] shadow-xl p-4 flex flex-col gap-4 w-[180px] sm:w-[190px] border border-light-gray"
                >
                    <p className="font-bold text-very-dark-blue text-sm text-center border-b pb-2">
                        Accesibilidad
                    </p>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs text-dark-gray font-semibold">Tamaño de texto</p>
                        <div className="flex items-center justify-between">
                            <button
                                aria-label="Disminuir tamaño de texto"
                                className="flex items-center gap-1 text-very-dark-blue hover:text-light-blue transition-colors text-sm"
                                onClick={decreaseFontSize}
                            >
                                <ZoomOut className="w-5 h-5" /> A-
                            </button>
                            <span aria-live="polite" className="text-xs text-dark-gray">
                                {fontSize}%
                            </span>
                            <button
                                aria-label="Aumentar tamaño de texto"
                                className="flex items-center gap-1 text-very-dark-blue hover:text-light-blue transition-colors text-sm"
                                onClick={increaseFontSize}
                            >
                                <ZoomIn className="w-5 h-5" /> A+
                            </button>
                        </div>
                    </div>

                </div>
            )}

            <button
                aria-label="Abrir menú de accesibilidad"
                aria-expanded={isOpen}
                aria-haspopup="dialog"
                className="bg-light-blue text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Accessibility className="w-6 h-6" />}
            </button>

        </div>
    );
}