import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './styles.css'
import numeral from '../../../utils/utils'
import { data } from '../../../database/db';

const ModalCadastro = (props) => {
    const {
        buttonLabel,
        className,
        visible,
        data
    } = props;

    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(true)
    const [code, setCode] = useState('')
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')

    const toggle = () => {
        setIsOpen(false);
    }

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    function handleCreate(e) {
        e.preventDefault();
        console.log(code, value, date)
    }
    console.log(props)


    return (
        <React.Fragment>
            <Modal isOpen={isOpen} toggle={toggle} className={className} visible={isOpen}>
                <ModalHeader toggle={toggle} close={closeBtn}>Cadastro</ModalHeader>
                <ModalBody>
                    <div className="container-cadastro">
                        <form>
                            <div className="form-group">
                                <label>Código:</label>
                                <input
                                    placeholder="Digite o codigo da compra"
                                    className="form-control"
                                    value={code}
                                    onChange={e => setCode(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Valor:</label>
                                <input
                                    placeholder="R$ 0,00"
                                    className="form-control"
                                    type="text"
                                    value={`R$`, value}
                                    onChange={e => setValue(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Data Compra:</label>
                                <input
                                    type="date"
                                    placeholder="Digite o codigo da compra"
                                    className="form-control"
                                    value={date}
                                    onChange={e => setDate(e.target.value)} />
                            </div>
                        </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => handleCreate}>Adicionar</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>


    );
}

export default ModalCadastro;
