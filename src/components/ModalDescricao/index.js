import React, { useState } from "react";
import Modal from 'react-modal';
import '../../StyleComponents/modalDescricao.css';
import Button from 'react-bootstrap/Button';



function Index({ isOpen, dataGender }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [txtGender, setTxtGender] = useState(dataGender.descricao);

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    className='form-modal-descricao'
                >
                    <h2>Descrição</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div>
                                    <div>
                                        <textarea
                                            id="txtGender"
                                            type="text"
                                            className="textarea-modal"
                                            value={txtGender}
                                            onChange={({ target }) => setTxtGender
                                                (target.value)}>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-descricao-modal">
                                <Button
                                    variant='danger'
                                    className="btn modal-trigger"
                                    onClick={() => { window.location.reload(true) }}
                                >Fechar</Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Index