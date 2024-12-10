import React from 'react'
import './Sobre.css'

// Componentes
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Imagens
import imagem1 from '../../assets/images/7692479z.png'
import imagem2 from '../../assets/images/5064482.png'

const Sobre = () => {
    return (
        <>
            <Header />
            {/* Sobre nós */}
            <div className='sobre-container d-flex justify-content-center py-3'>
                <div className='d-flex flex-column align-items-start justify-content-center me-3'>
                    <h1>Sobre nós</h1>
                    <p className='me-3 mb-4'>
                        Na Indi, conectamos profissionais independentes a clientes em busca de serviços criativos e especializados.
                        Seja você escritor, designer, desenvolvedor ou consultor, nossa plataforma intuitiva e acessível oferece oportunidades para expandir sua carreira.
                        Com uma comunidade colaborativa, ajudamos você a alcançar seus objetivos e conquistar o sucesso.
                        Junte-se à Indi e faça parte de um ambiente inspirador e transformador.
                    </p>
                </div>
                <img src={imagem1} alt="" width={500} />
            </div>

            {/* Missão */}
            <div className='missao d-flex justify-content-center py-3'>
                <img src={imagem2} alt="" width={500} />
                <div className='d-flex flex-column align-items-start justify-content-center me-3'>
                    <h1>Nossa Missão</h1>
                    <p className='me-3 mb-4'>
                        Focamos em oferecer uma plataforma inclusiva e inspiradora que capacite profissionais independentes a alcançar seu pleno potencial.
                        Conectamos talentos criativos a clientes visionários, promovendo o sucesso individual e o poder transformador das histórias.
                        Criamos um ambiente colaborativo onde a paixão pela criatividade e inovação impulsiona o progresso e a realização para todos.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Sobre