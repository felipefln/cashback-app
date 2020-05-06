import React from 'react'
import './styles.css'
import { FiEdit, FiDelete } from 'react-icons/fi'
import Header from '../components/Header';

export default function Dashboard() {


    return (
        <div>

            <Header />
            <div className="container-table">
                <table class="table table-hover">
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
                        <tr>
                            <th scope="row">4152</th>
                            <td>R$150,00</td>
                            <td>10/04/2018</td>
                            <td>21%</td>
                            <td>R$31,25</td>
                            <td>
                                <a href="#">
                                    <FiEdit />
                                </a>
                                <a href="#" style={{ paddingLeft: '10px' }}>
                                    <FiDelete />
                                </a>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}
