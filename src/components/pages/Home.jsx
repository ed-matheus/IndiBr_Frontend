import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

// Componentes
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Imagens
import imagem1 from '../../assets/images/web1.png'
import imagem2 from '../../assets/images/9019834-2.png'
import imagem3 from '../../assets/images/7692479z.png'

const Home = () => {
    return (
        <>
            <Header />
            <div className='home-container'>
                {/* Seção 1 */}
                <section className='novos-mundos d-flex justify-content-center'>
                    <div className='d-flex flex-column align-items-start justify-content-center me-3'>
                        <h1>Descubra novos mundos com os<br></br> profissionais locais da Indi</h1>
                        <button className='btn btn-1 text-light px-4 py-2'>
                            Contratar
                        </button>
                    </div>
                    <img src={imagem1} alt="" width={600} />
                </section>

                {/* Seção 2 */}
                <section className='oportunidades d-flex justify-content-center py-4'>
                    <img src={imagem2} alt="" width={500} />
                    <div className='d-flex flex-column align-items-start justify-content-center ms-3'>
                        <h1 className='text-light'>Trabalhe quando<br></br> quiser e alcance seus<br></br> objetivos financeiros<br></br> com a Indi</h1>
                        <p className='text-light'>
                            Seja dono do seu destino e ganhe dinheiro com suas<br></br>
                            habilidades, seja utilizando seu próprio talento ou<br></br>
                            escolhendo entre as oportunidades disponíveis em nossa<br></br>
                            plataforma
                        </p>
                        <button className='btn btn-2 text-light px-4 py-2'>
                            Conhecer
                        </button>
                    </div>
                </section>

                {/* Seção 3 */}
                <section className='novos-mundos d-flex justify-content-center py-4'>
                    <div className='d-flex flex-column align-items-start justify-content-center me-3'>
                        <h1>Sobre nós</h1>
                        <p className='sobre-text me-3 mb-4'>
                            Na Indi, conectamos profissionais independentes a clientes em busca de serviços criativos e especializados.
                            Seja você escritor, designer, desenvolvedor ou consultor, nossa plataforma intuitiva e acessível oferece oportunidades para expandir sua carreira.
                            Com uma comunidade colaborativa, ajudamos você a alcançar seus objetivos e conquistar o sucesso.
                            Junte-se à Indi e faça parte de um ambiente inspirador e transformador.
                        </p>
                        <Link to={'/sobre'}>
                            <button className='btn btn-1 text-light px-4 py-2'>
                                Veja mais
                            </button>
                        </Link>
                    </div>
                    <img src={imagem3} alt="" width={500} />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Home