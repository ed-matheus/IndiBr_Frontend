import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState(""); // Para o aviso global

    // Função para lidar com as alterações dos campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            // Se o campo for corrigido, remover o erro
            const updatedErrors = { ...errors };
            delete updatedErrors[name];
            setErrors(updatedErrors);
        }
    };

    // Função de validação do formulário
    const validateLogin = () => {
        const errors = {};
        if (!formData.username) errors.username = "O nome de usuário é obrigatório";
        if (!formData.password) errors.password = "A senha é obrigatória";
        return errors;
    };

    // Função para enviar os dados ao backend (para login)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateLogin();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setFormError("Preencha todos os campos antes de continuar.");
            return;
        }

        try {
            // Fazer a requisição para o backend (em produção, trocar pela URL do seu backend)
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);  // Exibe a resposta do backend
            alert('Login realizado com sucesso!');
            // Aqui você pode redirecionar o usuário ou realizar outra ação após o login bem-sucedido
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            setFormError("Erro ao realizar o login. Verifique seu nome de usuário e senha.");
        }
    };

    return (
        <div className='page-container bg-dark'>
            <div className='login-container m-auto'>
                <form className='d-flex flex-column p-2' onSubmit={handleSubmit}>
                    {/* Mensagem de erro global */}
                    {formError && <div className="alert alert-danger">{formError}</div>}

                    <h4 className='text-center mb-4'>Login</h4>

                    <label htmlFor="username" className='form-label'>Nome de Usuário</label>
                    <input
                        className={`form-control ${errors.username ? 'border-danger' : ''}`}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Digite seu nome de usuário"
                        value={formData.username}
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

                    <button type="submit" className="btn btn-dark mt-3">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
