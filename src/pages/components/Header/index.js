import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'

import './styles.css'

import logo from '../../../assets/logo.png'

export default function Header() {
    return (
        <React.Fragment>
            <div className="container-header">
                <header>
                    <Link to="/"><img width='300px' src={logo} /> </Link>
                    <div>
                        <button type="button" className="btn btn-outline-primary">Cadastrar</button>
                        <button type="button" className="btn btn-outline-danger"><FiLogOut />Logout</button>

                    </div>
                </header>
            </div>
        </React.Fragment>
    )
}
