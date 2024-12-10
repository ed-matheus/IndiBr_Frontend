import React, { useState } from 'react'
import './Contato.css'

// Componentes
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
    })

    const [formError, setFormError] = useState('')
    const [formSuccess, setFormSuccess] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormError('')
        setFormSuccess('')

        // Validação simples
        if (!formData.nome || !formData.email || !formData.mensagem) {
            setFormError('Preencha todos os campos obrigatórios!')
            return
        }

        try {
            // Supondo que você tenha uma API para enviar os dados
            const response = await axios.post('http://127.0.0.1:8000/api/contato', formData)
            if (response.status === 200) {
                setFormSuccess('Mensagem enviada com sucesso!')
                setFormData({ nome: '', email: '', telefone: '', mensagem: '' }) // Limpar o formulário
            }
        } catch (error) {
            setFormError('Erro ao enviar a mensagem. Tente novamente mais tarde.')
        }
    }

    return (
        <>
            <Header />
            <div className='contato-container d-flex flex-column justify-content-center align-items-center w-100 py-4'>
                <h1 className='text-center mb-4'>Entre em Contato</h1>

                {/* Exibir mensagens de erro ou sucesso */}
                {formError && <div className="alert alert-danger">{formError}</div>}
                {formSuccess && <div className="alert alert-success">{formSuccess}</div>}

                {/* Formulário de Contato */}
                <form onSubmit={handleSubmit} className="w-50 needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome <span className="text-danger">*</span></label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail <span className="text-danger">*</span></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(XX) XXXXX-XXXX"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mensagem" className="form-label">Mensagem <span className="text-danger">*</span></label>
                        <textarea
                            className="form-control"
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-dark">Enviar Mensagem</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contato
