import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'

import './styles.css'

import logo from '../../../assets/logo.png'
import ModalCadastro from '../Modal';

export default function Header() {
    const [visible, setVisible] = useState(false)
    const history = useHistory()

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }
    return (
        <React.Fragment>
            <div className="container-header">
                <header>
                    <Link to="/"><img width='300px' src={logo} /> </Link>
                    {
                        visible && <ModalCadastro visible={visible} />
                    }
                    <div>
                        <button type="button" className="btn btn-outline-primary" onClick={() => setVisible(true)}>Cadastrar</button>
                        <button type="button" className="btn btn-outline-danger" onClick={() => handleLogout()}><FiLogOut />Logout</button>
                    </div>
                </header>
            </div>
        </React.Fragment>
    )
}
