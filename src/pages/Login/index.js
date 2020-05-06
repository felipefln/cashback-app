import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import './styles.css'


export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()


    return (

        <form onSubmit={() => { }}>
            <img src={logo} alt="logo" styles={{ height: '300px' }}></img>
            <div className="form-group">
                <label>E-mail:</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu email de acesso"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Digite sua senha de acesso"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Entrar</button>
            <div className="footer-login">
                <Link to="/register">
                    <FiLogIn />
                    <strong>Criar conta de acesso</strong>
                </Link>
            </div>

        </form>



    );
}
