// 1. Así se importa un CSS Module (le damos el nombre 'styles')
import styles from './Button.module.css';

export default function Button() {
    return (
        // 2. Así aplicamos la clase usando llaves {} en lugar de comillas
        <div >
            <p>hola, como ya tengo el estilo no tengo que crear un text aparte</p>
            <button className={styles['button-component']}>Button</button>
        </div>
    )
}