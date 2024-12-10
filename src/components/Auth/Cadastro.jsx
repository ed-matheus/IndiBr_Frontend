import './Cadastro.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        telefone: '',
        password: '',
        password_confirmation: '',
        termosAceitos: false,
        rua: '',
        numero: '',
        municipio: '',
        estado: '',
        cpf: '',
        verificacaoDocumentos: false,
        leituraFacial: false,
        profissao: '',
        areaAtuacao: '',
        statusVerificacao: false,
        geolocalizacao: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState(""); // Para o aviso global

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
        if (errors[name]) {
            // Se o campo for corrigido, remover o erro
            const updatedErrors = { ...errors };
            delete updatedErrors[name];
            setErrors(updatedErrors);
        }
    };

    // Funções de validação para cada etapa
    const validateStep1 = () => {
        const errors = {};
        if (!formData.firstname) errors.firstname = "O primeiro nome é obrigatório";
        if (!formData.lastname) errors.lastname = "O sobrenome é obrigatório";
        if (!formData.email) errors.email = "O e-mail é obrigatório";
        if (!formData.telefone) errors.telefone = "O telefone é obrigatório";
        if (!formData.password) errors.password = "A senha é obrigatória";
        if (formData.password !== formData.password_confirmation) errors.password_confirmation = "As senhas não coincidem";
        if (!formData.termosAceitos) errors.termosAceitos = "Você deve aceitar os termos de uso";
        return errors;
    };

    const validateStep2 = () => {
        const errors = {};
        if (!formData.cpf) errors.cpf = "O CPF é obrigatório";
        if (!formData.verificacaoDocumentos) errors.verificacaoDocumentos = "Você deve verificar seus documentos";
        if (!formData.leituraFacial) errors.leituraFacial = "Você deve realizar a leitura facial";
        return errors;
    };

    const validateStep3 = () => {
        const errors = {};
        if (!formData.profissao) errors.profissao = "A profissão é obrigatória";
        if (!formData.areaAtuacao) errors.areaAtuacao = "A área de atuação é obrigatória";
        if (!formData.geolocalizacao) errors.geolocalizacao = "A geolocalização é obrigatória";
        return errors;
    };

    // Função para validar a etapa atual
    const validateStep = () => {
        switch (currentStep) {
            case 1:
                return validateStep1();
            case 2:
                return validateStep2();
            case 3:
                return validateStep3();
            default:
                return {};
        }
    };

    // Função para enviar os dados ao backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateStep();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setFormError("Preencha todos os campos antes de continuar.");
            return;
        }

        try {
            // Fazendo a requisição para a API
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);  // Exibe a resposta do backend
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert('Erro ao realizar o cadastro.');
        }
    };

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        const validationErrors = validateStep();

        if (Object.keys(validationErrors).length === 0) {
            if (currentStep === 1) {
                setCurrentStep(2);
            } else if (currentStep === 2) {
                setCurrentStep(3);
            }
            setFormError(""); // Limpar a mensagem de erro global
        } else {
            setErrors(validationErrors);
            setFormError("Preencha todos os campos antes de continuar.");
        }
    };

    // Função para voltar para a etapa anterior
    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <div className='page-container bg-dark d-flex flex-column align-items-center'>
            {/* <h2 className='text-light m-auto'>Cadastro de Profissional</h2> */}
            <div className='form-container m-auto'>
                <form className='d-flex flex-column p-2' onSubmit={handleSubmit}>
                    {/* Mensagem de erro global */}
                    {formError && <div className="alert alert-danger">{formError}</div>}

                    {currentStep === 1 && (
                        <div>
                            <h5 className='text-center mb-4'>Etapa 1: Informações Pessoais e Endereço</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="firstname" className='form-label'>Primeiro Nome</label>
                                    <input
                                        className={`form-control ${errors.firstname ? 'border-danger' : ''}`}
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Digite seu primeiro nome"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="lastname" className='form-label'>Sobrenome</label>
                                    <input
                                        className={`form-control ${errors.lastname ? 'border-danger' : ''}`}
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Digite seu sobrenome"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="telefone" className='form-label'>WhatsApp (11) 9***</label>
                                    <input
                                        className={`form-control ${errors.telefone ? 'border-danger' : ''}`}
                                        type="text"
                                        name="telefone"
                                        id="telefone"
                                        placeholder="Digite seu telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input
                                        className={`form-control ${errors.email ? 'border-danger' : ''}`}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Digite seu email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="password" className='form-label'>Senha</label>
                                    <input
                                        className={`form-control ${errors.password ? 'border-danger' : ''}`}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Digite sua senha"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="password_confirmation" className='form-label'>Confirmar Senha</label>
                                    <input
                                        className={`form-control ${errors.password_confirmation ? 'border-danger' : ''}`}
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        placeholder="Confirme sua senha"
                                        value={formData.password_confirmation}
                                        onChange={handleChange}
                                    />

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type="checkbox"
                                            name="termosAceitos"
                                            checked={formData.termosAceitos}
                                            onChange={handleChange}
                                        />
                                        <label className='form-check-label'>
                                            Aceitei os Termos de Uso
                                        </label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input
                                        className={`form-control ${errors.rua ? 'border-danger' : ''}`}
                                        type="text"
                                        name="rua"
                                        id="rua"
                                        placeholder="Digite sua rua"
                                        value={formData.rua}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="numero" className='form-label'>Número</label>
                                    <input
                                        className={`form-control ${errors.numero ? 'border-danger' : ''}`}
                                        type="text"
                                        name="numero"
                                        id="numero"
                                        placeholder="Digite o número da casa"
                                        value={formData.numero}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="municipio" className='form-label'>Município</label>
                                    <input
                                        className={`form-control ${errors.municipio ? 'border-danger' : ''}`}
                                        type="text"
                                        name="municipio"
                                        id="municipio"
                                        placeholder="Digite o município"
                                        value={formData.municipio}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input
                                        className={`form-control ${errors.estado ? 'border-danger' : ''}`}
                                        type="text"
                                        name="estado"
                                        id="estado"
                                        placeholder="Digite o estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h5>Etapa 2: Documentos e Leitura Facial</h5>
                            <label htmlFor="cpf" className='form-label'>CPF</label>
                            <input
                                className={`form-control ${errors.cpf ? 'border-danger' : ''}`}
                                type="text"
                                name="cpf"
                                id="cpf"
                                placeholder="Digite seu CPF"
                                value={formData.cpf}
                                onChange={handleChange}
                            />

                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    name="verificacaoDocumentos"
                                    checked={formData.verificacaoDocumentos}
                                    onChange={handleChange}
                                />
                                <label className='form-check-label'>
                                    Verifique seus documentos
                                </label>
                            </div>

                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    name="leituraFacial"
                                    checked={formData.leituraFacial}
                                    onChange={handleChange}
                                />
                                <label className='form-check-label'>
                                    Realize a leitura facial
                                </label>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h5>Etapa 3: Profissão e Geolocalização</h5>
                            <label htmlFor="profissao" className='form-label'>Profissão</label>
                            <input
                                className={`form-control ${errors.profissao ? 'border-danger' : ''}`}
                                type="text"
                                name="profissao"
                                id="profissao"
                                placeholder="Digite sua profissão"
                                value={formData.profissao}
                                onChange={handleChange}
                            />

                            <label htmlFor="areaAtuacao" className='form-label'>Área de Atuação</label>
                            <input
                                className={`form-control ${errors.areaAtuacao ? 'border-danger' : ''}`}
                                type="text"
                                name="areaAtuacao"
                                id="areaAtuacao"
                                placeholder="Descreva sua área de atuação"
                                value={formData.areaAtuacao}
                                onChange={handleChange}
                            />

                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    name="statusVerificacao"
                                    checked={formData.statusVerificacao}
                                    onChange={handleChange}
                                />
                                <label className='form-check-label'>
                                    Status de Verificação de Documento
                                </label>
                            </div>

                            <label htmlFor="geolocalizacao" className='form-label'>Geolocalização</label>
                            <input
                                className={`form-control ${errors.geolocalizacao ? 'border-danger' : ''}`}
                                type="text"
                                name="geolocalizacao"
                                id="geolocalizacao"
                                placeholder="Digite sua geolocalização"
                                value={formData.geolocalizacao}
                                onChange={handleChange}
                            />
                        </div>
                    )}

                    <div className="form-buttons d-flex justify-content-between">
                        {currentStep > 1 && (
                            <button type="button" className="btn btn-secondary" onClick={prevStep}>Voltar</button>
                        )}
                        {currentStep < 3 && (
                            <button type="button" className="btn btn-dark" onClick={nextStep}>Avançar</button>
                        )}
                        {currentStep === 3 && (
                            <button type="submit" className="btn btn-dark">Registrar</button>
                        )}
                    </div>
                </form>
                <h6 className='mt-4 m-auto text-center pt-4'>
                    Já tem conta com a gente?<br></br>
                    <Link to={'/login'}>
                        <span>Faça Login</span>
                    </Link>
                </h6>
            </div>
        </div>
    );
};

export default Register;
