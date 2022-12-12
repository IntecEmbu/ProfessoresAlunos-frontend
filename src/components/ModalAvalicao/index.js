import React, { useState } from "react";
import Modal from 'react-modal';
import '../../StyleComponents/modalAvaliacao.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../service/api';




function Index({ isOpen}) {
    const [modalIsOpen, setIsOpen] = useState(isOpen);
    const [analiseGt, setAnaliseGt] = useState('');
    const [nota, setNota] = useState('');


    async function createNota(e) {
        e.preventDefault()
        try {
          await api.post('/nota', {
            analiseGt, nota
          })
          alert('Avaliacao cadastrada com sucesso')
        }
        catch (err) {
    
          alert(`Houve um erro: ${err} `)
        }
      }




    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    className='ava'
                >
                    <h2>Avaliar</h2>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="vai">
                                <label>Analise:</label>
                                    <div className="text-area-ava">
                                        <textarea
                                        value={analiseGt}
                                        onChange={e => setAnaliseGt(e.target.value)} 
                                        className="text-area-analise-modal">
                                        </textarea>
                                    </div>
                                    <div>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nota:</Form.Label>
                                            <Form.Control
                                                value={nota}
                                                onChange={e => setNota(e.target.value)}
                                                type="text"
                                                required />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-descricao-modal">
                                <Button
                                    variant='danger'
                                    className="btn modal-trigger"
                                    onClick={() => { window.location.reload(true) }}
                                >Fechar</Button>
                                <Button
                                    variant='primary'
                                    className="btn modal-trigger"
                                    onClick={createNota}
                                >Avaliar</Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Index