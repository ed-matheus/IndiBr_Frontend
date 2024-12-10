import 'bootstrap/dist/css/bootstrap.min.css'; // CSS do Bootstrap
import './App.css' // CSS

// Páginas
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StatusKYC from '../src/components/Auth/StatusKYC';
import Cadastro from '../src/components/Auth/Cadastro'; 
import Login from '../src/components/Auth/Login';
import Contato from './components/pages/Contato';
import Servicos from './components/pages/Servicos';
import Sobre from '../src/components/pages/Sobre';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='App'>
        <Router>
            <Routes> {/* Contém todas as rotas do aplicativo */}
                <Route path='/' element={<Home />} /> {/* Página inicial */}
                <Route path='/sobre' element={<Sobre />} /> {/* Página Sobre */}
                <Route path='/servicos' element={<Servicos />} /> {/* Página Serviços */}
                <Route path='/contato' element={<Contato />} /> {/* Página de Contato */}
                <Route path='/login' element={<Login />} /> {/* Página Sobre Nós */}
                <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
                <Route path="/status-kyc" element={<StatusKYC />} /> {/* Status KYC */}
            </Routes>
        </Router>
    </div>
  )
}

export default App
