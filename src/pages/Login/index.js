import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import './styles.css'
import { users } from '../../database/db';


export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()

    function handleLogin(e) {
        e.preventDefault()
        console.log(users)
        console.log(email, password)
        let check = users.map(u => {
            return u.email === email && u.password === password
        })

        if (check[0] === true) {
            history.push('/dashboard')
        } else {
            alert(`Usuário não cadastrado`)
            history.push('/register')
        }
    }


    return (

        <form onSubmit={handleLogin}>
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
            <button type="submit" className="btn btn-primary btn-block" onClick={() => { }}>Entrar</button>
            <div className="footer-login">
                <Link to="/register">
                    <FiLogIn />
                    <strong>Criar conta de acesso</strong>
                </Link>
            </div>

        </form>



    );
}
