import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p >HOLA. ESTE ES EL INICIO DE OFICIAR</p>

      <ButtonComponent />
    </div>
  )
}

export default App
// siempre qiue hay un retorno de un componente de react, debe estar envuelto en un div...
