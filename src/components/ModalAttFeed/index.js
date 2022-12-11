import React, { useState } from "react";
import Modal from 'react-modal';
import axios from 'axios'
import api from '../../service/api';


function Index({ isOpen, dataFeed }) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [txtMaterial, setTxtMaterial] = useState(dataFeed.material);
    const [txtAssunto, setTxtAssunto] = useState(dataFeed.assnto);




    function closeModal() {
        setIsOpen(false)
    }

    async function handleSubmit(e) { //e visualiza o elemento que disparou a finção
        e.preventDefault(); // evita que o formulario envie o dado e recarregue a pagina,

        const feedData = {
            "material": txtMaterial,
            "assunto": txtAssunto,
            "id_material": dataFeed.id_material,
        }

        const { data } = await api.put('http://localhost:3333/txtMaterial', feedData);
        alert(data.message);
        window.location.reload(true);

    }

    return (
        <>
            <div>
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
            </div>
        </>
    )
}

export default Index