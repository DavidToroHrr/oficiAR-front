import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import WorkerRegister from './pages/WorkerRegister/WorkerRegister';
import DefaultHome from './pages/DefaultHome/DefaultHome';
import ValidationIdentity from './pages/OfficersView/ValidationIdentity';
import CertificationsUpload from './pages/OfficersView/CertificationsUpload';
import SpecificationOfficer from './pages/OfficersView/SpecificationOfficer';
import BankAccount from './pages/OfficersView/BankAccount';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el inicio (cuando entras a localhost:5173/) */}
        <Route path="/" element={<DefaultHome />} />
        
        {/* Ruta para las solicitudes (localhost:5173/solicitudes) */}
        <Route path="/solicitudes" element={<h1>Panel de Solicitudes</h1>} />
        
        {/* Puedes ir agregando todas las que necesites para tu entrega */}
        <Route path="/login" element={<Login />} />

        <Route path="/worker-register" element={<WorkerRegister />}>

            <Route index element={<Navigate to="validation-identity" replace />} />
            <Route path="validation-identity" element={<ValidationIdentity />} />
            <Route path="office-specification" element={<SpecificationOfficer />} />
            <Route path="certifications" element={<CertificationsUpload />} />
            <Route path="bank-account" element={<BankAccount />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
// siempre qiue hay un retorno de un componente de react, debe estar envuelto en un div...
