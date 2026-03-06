import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import WorkerRegister from './pages/WorkerRegister/WorkerRegister';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el inicio (cuando entras a localhost:5173/) */}
        <Route path="/" element={<h1>Bienvenido al Inicio de OficiAR</h1>} />
        
        {/* Ruta para las solicitudes (localhost:5173/solicitudes) */}
        <Route path="/solicitudes" element={<h1>Panel de Solicitudes</h1>} />
        
        {/* Puedes ir agregando todas las que necesites para tu entrega */}
        <Route path="/login" element={<Login />} />

        <Route path="/worker-register" element={<WorkerRegister />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
// siempre qiue hay un retorno de un componente de react, debe estar envuelto en un div...
