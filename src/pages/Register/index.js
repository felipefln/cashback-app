import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from '../../assets/logo.png'
import './styles.css'
import { users } from '../../database/db'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [document, setDocument] = useState('')
    const history = useHistory()


    async function handleCreate(e) {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }

        users.push(user)
        console.log(users)
        history.push('/')

    }

    return (
        <div className="container-form">
            <form onSubmit={handleCreate}>
                <img src={logo} alt="logo"></img>

                <div className="form-group">
                    <label>Nome Completo:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>E-mail:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>CPF:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu CPF"
                        value={document}
                        onChange={e => setDocument(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Criar conta</button>
                <p className="forgot-password text-right">
                    Já registrado <Link to="/">Acessar?</Link>
                </p>
            </form>
        </div>

    );
}
