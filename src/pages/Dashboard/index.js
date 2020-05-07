import React, { useState, useEffect } from 'react'
import './styles.css'
import { FiEdit, FiDelete } from 'react-icons/fi'
import Header from '../components/Header';
import { data } from '../../database/db';
import ModalCadastro from '../components/Modal';

export default function Dashboard() {
    const [visible, setVisible] = useState(false)

    function handleModal(result) {
        console.log(result)
        setVisible(true)
    }

    useEffect(() => {
        const user = localStorage.getItem('@cashbackUser')
        console.log(JSON.stringify(user))
    }, [])

    return (
        <div>

            <Header />
            <div className="container-table">

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Data</th>
                            <th scope="col">Cashback %</th>
                            <th scope="col">Cashback R$</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(result => (
                                <tr key={result.code}>
                                    <th scope="row">{result.code}</th>
                                    <td>R${result.value}</td>
                                    <td>{result.date}</td>
                                    <td>{result.cashPercent}%</td>
                                    <td>R${result.cashValue}</td>
                                    <td>
                                        <button className="btn btn-light" onClick={() => handleModal(result)}>
                                            <FiEdit />
                                        </button>

                                        <button className="btn btn-light">
                                            <FiDelete />
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        {
                            visible && <ModalCadastro visible={visible} data={data} />
                        }
                    </tbody>
                </table>
            </div>

        </div >
    )
}
