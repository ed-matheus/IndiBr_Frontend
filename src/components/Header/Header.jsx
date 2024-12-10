import React from 'react'
import './Header.css' // Arquivo CSS
import { Link } from 'react-router-dom'
import logo from '/cropped-indd.png' // Importando Logo

const Header = () => {
    return (
        <header className='d-flex justify-content-around align-items-center p-3'>
            <Link to="/">
                <img src={logo} alt="Logo da IndiBr" width={130} />
            </Link>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Páginas do site */}
                            <li className="nav-item me-4">
                                <Link to="/">
                                    <span className="nav-link active" aria-current="page" href="#">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/">
                                    <span className="nav-link" aria-current="page" href="#">Como funciona</span>
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link to="/sobre">
                                    <span className="nav-link" href="#">Sobre</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contato">
                                    <span className="nav-link" href="#">Contato</span>
                                </Link>
                            </li>
                        </ul>

                        
                    </div>
                </div>
            </nav>

            {/* Login e Cadastro */}
            <div className='auth'>
                <Link to="/login">
                    <button className='login btn btn-dark me-3'>Entrar</button>
                </Link>
                
                <Link to="/cadastro">
                    <button className='cadastro btn btn-dark'>Cadastrar</button>
                </Link>
            </div>
        </header>
    )
}

export default Header