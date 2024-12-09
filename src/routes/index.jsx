// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importação das funções de roteamento
import Cadastro from '../components/Auth/Cadastro'; // Importando o componente Cadastro
import StatusKYC from '../components/Auth/StatusKYC'; // Importando o componente StatusKYC

function AppRoutes() {
    return (
        <Router>
            <Routes> {/* Contém todas as rotas do aplicativo */}
                <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para a página de Cadastro */}
                <Route path="/status-kyc" element={<StatusKYC />} /> {/* Rota para a página de Status KYC */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
