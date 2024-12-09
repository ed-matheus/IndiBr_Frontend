import './Cadastro.css'
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        cpf: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Fazendo a requisição para a rota raiz da API
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);  // Exibe a resposta do backend
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='form-control'
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        className='form-control'
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                    />
                    <button className='btn btn-primary' type="submit">Register</button>
                </form>
            </div>
        </>
    );
};

export default Register;
