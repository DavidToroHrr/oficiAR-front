import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import WorkerRegister from './pages/WorkerRegister/WorkerRegister';
import DefaultHome from './pages/DefaultHome/DefaultHome';
import ValidationIdentity from './pages/OfficersView/ValidationIdentity';
import CertificationsUpload from './pages/OfficersView/CertificationsUpload';
import SpecificationOfficer from './pages/OfficersView/SpecificationOfficer';
import BankAccount from './pages/OfficersView/BankAccount';
import VerificationComponent from './components/VerificationComponent/VerficationComponent';
import OfficersHome from './pages/OfficersHome/OfficersHome';
import UsersHome from './pages/UsersHome/UsersHome';
import ValidationIdentity from './pages/ValidationOfficersViews/ValidationIdentity';
import CertificationsUpload from './pages/ValidationOfficersViews/CertificationsUpload';
import SpecificationOfficer from './pages/ValidationOfficersViews/SpecificationOfficer';
import BankAccount from './pages/ValidationOfficersViews/BankAccount';
import VerificationComponent from './layouts/VerificationComponent/VerficationComponent';
import PricingComponent from './components/PricingComponent/PricingComponent';
import CheckOutMercadoPago from './components/CheckOutMercadoPago/CheckOutMercadoPago';
import ClientFlowLayout from './layouts/ClientFlowLayout/ClientFlowLayout';
import ProblemSpecification from './pages/ContratationOfficerViews/ProblemSpecification';
import OfficerSelection from './pages/ContratationOfficerViews/OfficerSelection';
import NegotiationAndContact from './pages/ContratationOfficerViews/NegotiationAndContact';
import PaymentRelease from './pages/ContratationOfficerViews/PaymentRelease';
import ServiceExecution from './pages/ContratationOfficerViews/ServiceExecution';
import PaymentConfirmation from './pages/ContratationOfficerViews/PaymentConfirmation';

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
        </Route>

        <Route path="/validation" element={<VerificationComponent />} >
                <Route index element={<Navigate to="validation-identity" replace />} />
                <Route path="validation-identity" element={<ValidationIdentity />} />
                <Route path="officer-specification" element={<SpecificationOfficer />} />
                <Route path="certifications" element={<CertificationsUpload />} />
                <Route path="bank-account" element={<BankAccount />} />
        </Route>

        <Route path="/officers-home" element={<OfficersHome />} />
        <Route path="/users-home" element={<UsersHome />} />
            </Route>
        
        <Route path="/pricing" element={<PricingComponent />} />
        <Route path="/checkout" element={<CheckOutMercadoPago />} />

        <Route path="/client-flow" element={<ClientFlowLayout/>} >
                <Route index element={<Navigate to="problem-specification" replace />} />

                <Route path="problem-specification" element={<ProblemSpecification/>} />

                <Route path="officer-selection" element={<OfficerSelection/>} />

                <Route path="negotiation-and-contact" element={<NegotiationAndContact/>} />

                <Route path="payment-release" element={<PaymentRelease/>} />

                <Route path="service-execution" element={<ServiceExecution/>} />

                <Route path="payment-confirmation" element={<PaymentConfirmation/>} />
                
            </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
// siempre que hay un retorno de un componente de react, debe estar envuelto en un div...
