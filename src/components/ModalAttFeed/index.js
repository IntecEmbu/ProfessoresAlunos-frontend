import React, { useState } from "react";
import Modal from 'react-modal';
import axios from 'axios'
import '../../StyleComponents/Modalattmat.css';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";



function Index({ isOpen, dataGender }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [txtGender, setTxtGender] = useState(dataGender.genero);
    const [txtAssunto, setTxtAssunto] = useState(dataGender.assunto);


    console.log(txtGender)



    function closeModal() {
        setIsOpen(false)
    }

    async function handleSubmit(e) { //e visualiza o elemento que disparou a finção
        e.preventDefault(); // evita que o formulario envie o dado e recarregue a pagina,
        const genderData = {
            "id_genero": dataGender.id_genero,
            "genero": txtGender,

        }
        const { data } = await axios.put('http://localhost:8080/gender', genderData);
        alert(data.message);
    }

    async function handleSubmitAssunto(e) { //e visualiza o elemento que disparou a finção
        e.preventDefault(); // evita que o formulario envie o dado e recarregue a pagina,
        const genderData = {
            "id_genero": dataGender.id_genero,
            "assunto": txtAssunto,

        }
        const { data } = await axios.put('http://localhost:8080/gender/assunto', genderData);
        alert(data.message);
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className='modal-att-mat'
                >
                    <h2>Editar Material</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="form-modal-att-mat">
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Material</Form.Label>
                                        <Form.Control
                                            id="txtGender"
                                            type="text"
                                            className="validate"
                                            value={txtGender}
                                            onChange={({ target }) => setTxtGender
                                                (target.value)}
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        name="action"
                                        onClick={handleSubmit}
                                    >Atualizar Material</Button>
                                </div>
                                <div className="form-modal-att-mat">
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Assunto</Form.Label>
                                        <Form.Control
                                            id="txtAssunto"
                                            type="text"
                                            className="validate"
                                            value={txtAssunto}
                                            onChange={({ target }) => setTxtAssunto
                                                (target.value)}
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        name="action"
                                        onClick={handleSubmitAssunto}
                                    >Atualizar Assunto</Button>
                                </div>
                            </div>
                            <div className="btn-att-modal">
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