import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import api from '../../service/api';


function Index({ isOpen, dataFeed }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [txtMaterial, setTxtMaterial] = useState(dataFeed.material);
    const [txtAssunto, setTxtAssunto] = useState(dataFeed.assunto);




    function closeModal() {
        setIsOpen(false)
    }

    async function handleSubmit(dataFeed, e) { //e visualiza o elemento que disparou a finção

        const feedData = {
            "material": txtMaterial,
            "assunto": txtAssunto,
            "id_material": dataFeed.id_material,
        }

        const { data } = await api.put('http://localhost:8080/material', feedData);
        alert(data.message);
        window.location.reload(true);

    }

    return (
        <>
            <div>
                <Modal
                    show={isOpen}
                    backdrop="static"
                >
                    <div className="color-dele">
                        <Modal.Header>
                            <Modal.Title>Atualizar Material</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="input-field col s12">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        placeholder="Material"
                                        id="txtMaterial"
                                        type="text"
                                        className="validate"
                                        value={txtMaterial}
                                        onChange={({ target }) => setTxtMaterial(target.value)}
                                    />
                                </Form.Group>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            placeholder="Assunto"
                                            id="txtAssunto"
                                            type="text"
                                            className="validate"
                                            value={txtAssunto}
                                            onChange={({ target }) => setTxtAssunto(target.value)}
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <div className="btn-modal-dele">
                                <Button
                                    variant="danger"
                                    type="submit"
                                    name="action"
                                    onClick={() => { window.location.reload(true) }}
                                >Cancelar</Button>

                                <Button
                                    variant="success"
                                    type="submit"
                                    name="action"
                                    onClick={() => { handleSubmit() }}
                                >Atualizar</Button>
                            </div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
            {/* <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                >
                    <h2>Atualização de material</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        placeholder="Material"
                                        id="txtMaterial"
                                        type="text"
                                        className="validate"
                                        value={txtMaterial}
                                        onChange={({ target }) => setTxtMaterial(target.value)}
                                    />

                                    <input
                                        placeholder="Assunto"
                                        id="txtAssunto"
                                        type="text"
                                        className="validate"
                                        value={txtAssunto}
                                        onChange={({ target }) => setTxtAssunto(target.value)}
                                    />
                                </div>
                            </div>
                            <button className="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                                onClick={handleSubmit}
                            >Atualizar</button>
                            <button
                                className="btn modal-trigger"
                                onClick={() => { window.location.reload(true) }}
                            >Cancelar</button>
                        </form>
                    </div>
                </Modal>
            </div> */}
        </>
    )
}

export default Index