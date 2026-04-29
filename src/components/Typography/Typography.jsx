import React from 'react';

export default function Typography({ variant = 'body', children, className = '', ...props }) {
    
    // Diccionario de estilos ajustado (Tope máximo: 3xl)
    const styles = {
        // En celular será 2xl y en PC/Tablets subirá máximo a 3xl
        h1: "text-2xl md:text-3xl font-black text-very-dark-blue", 
        
        // Los h2 (como los de las secciones Default Home) llegarán a 2xl
        h2: "text-xl md:text-2xl font-extrabold text-very-dark-blue", 
        
        // Los h3 llegarán a xl
        h3: "text-lg md:text-xl font-bold text-very-dark-blue", 
        
        // Subtítulos
        subtitle: "text-base md:text-lg font-medium text-gray-800", 
        
        // Párrafos (El estándar de lectura. En celular sm, en PC base)
        body: "text-sm md:text-base text-gray-700 leading-relaxed", 
        
        // Textos pequeños (Fechas, notas)
        small: "text-xs md:text-sm text-gray-500 font-light" 
    };

    const Tag = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        subtitle: 'h4',
        body: 'p',
        small: 'p'
    }[variant] || 'p'; // Si se escribe mal la variante, dibuja un <p> por seguridad

    return (
        // Combinamos la clase del diccionario con cualquier clase extra que venga por props
        <Tag className={`${styles[variant]} ${className}`} {...props}>
            {children}
        </Tag>
    );
}