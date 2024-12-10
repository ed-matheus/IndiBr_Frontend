import React from 'react'
import './Servicos.css'

// Componentes
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Imagens
import imagem1 from '../../assets/images/3156812.png'
import imagem2 from '../../assets/images/5208994.png'
import imagem3 from '../../assets/images/5356721.png'

const Servicos = () => {
    return (
        <>
            <Header />
            <div className='services-container w-100'>
                <div className='py-3'>
                    <h1 className='text-center'>Serviços</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1>
                            1.
                            Inicie uma conversa com nossa IA,<br></br>
                            fornecendo informações sobre<br></br>
                            os serviços necessários
                        </h1>
                        <img src={imagem1} alt="homem mexendo no celular" width={600} />
                    </div>
                </div>

                <div className='py-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1>
                            2.
                            Nossa IA coleta os dados<br></br>
                            do usuário e as<br></br>
                            informações sobre o<br></br>
                            serviço desejado.
                        </h1>
                        <img src={imagem2} alt="homem mexendo no celular" width={600} />
                    </div>
                </div>

                <div className='py-3'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h1>
                            3.
                            A IA localiza um parceiro<br></br> 
                            próximo em nosso banco<br></br>
                            de dados e conecta o<br></br>
                            usuário ao parceiro<br></br>
                            adequado para atender às<br></br>
                            suas necessidades.
                        </h1>
                        <img src={imagem3} alt="homem mexendo no celular" width={600} />
                    </div>
                </div>
                
                <div className='d-flex justify-content-center my-5'>
                    <button className='btn btn-start px-4 py-2'>Comece aqui</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Servicos