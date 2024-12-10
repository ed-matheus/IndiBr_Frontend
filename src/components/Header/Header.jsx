import React from 'react';
import './Header.css'; // Arquivo CSS
import { NavLink } from 'react-router-dom'; // Importando NavLink
import logo from '/cropped-indd.png'; // Importando Logo

const Header = () => {
    return (
        <header className='d-flex justify-content-around align-items-center p-3'>
            <NavLink to="/">
                <img src={logo} alt="Logo da IndiBr" width={130} />
            </NavLink>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Páginas do site */}
                            <li className="nav-item me-4">
                                <NavLink to="/" className="nav-link" activeClassName="active" exact>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/servicos" className="nav-link" activeClassName="active">
                                    Serviços
                                </NavLink>
                            </li>
                            <li className="nav-item me-4">
                                <NavLink to="/sobre" className="nav-link" activeClassName="active">
                                    Sobre
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contato" className="nav-link" activeClassName="active">
                                    Contato
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Login e Cadastro */}
            <div className='auth'>
                <NavLink to="/login">
                    <button className='login btn btn-dark me-3'>Entrar</button>
                </NavLink>
                
                <NavLink to="/cadastro">
                    <button className='cadastro btn btn-dark'>Cadastrar</button>
                </NavLink>
            </div>
        </header>
    );
}

export default Header;