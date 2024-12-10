import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='p-5 d-flex flex-column align-items-center justify-content-center'>
            <nav>
                <ul className='footer-menu d-flex'>
                    <Link to={'/'}>
                        <li className='me-5'>Home</li>
                    </Link>
                    <Link to={'/servicos'}>
                        <li className='me-5'>Serviços</li>
                    </Link>
                    <Link to={'/sobre'}>
                        <li className='me-5'>Sobre</li>
                    </Link>
                    <Link to="/contato">
                        <li className='me-5'>Contato</li>
                    </Link>
                    <li className='me-5'>Políticas de Privacidade</li>
                    <li>Termos de uso</li>
                </ul>
            </nav>
            <div className='copyright text-light text-center mt-5'>
                © INDI BR 2024 - Todos os direitos reservados. <br></br>
                Desenvolvido por Pixel12Digital
            </div>
        </footer>
    )
}

export default Footer