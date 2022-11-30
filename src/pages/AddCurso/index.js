import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import '../../styles/AddCurso.css';



function Index() {

    const [nomedoCurso, setNomedoCurso] = useState('');
    const [acronimo, setAcronimo] = useState('');
    const [periodo, setPerido] = useState('');

    async function createCourse(e) {
        e.preventDefault()
        try {
            await api.post('/addCurso', {
                nomedoCurso, acronimo, periodo
            })
            alert('Curso cadastrado com sucesso')
        }
        catch (err) {

            alert(`Houve um erro: ${err}`)
        }
    }



    return (
        <>
            <Btn />
            <div className='pai-addCurso'>
                <h1 className='text-addCurso'>ADICIONAR CURSO</h1>
                <div className='addCurso-container'>
                    <fieldset class="">
                        <div class="">
                            <h6 className='text-addCurso-periodo'>Selecione o Período:</h6>
                            <div class="" className='AddCurso-periodo'>
                                <div class="" >
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="1"
                                            onChange={e => setPerido(e.target.value)}
                                            required />
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="2"
                                            onChange={e => setPerido(e.target.value)}
                                            required />
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="3"
                                            onChange={e => setPerido(e.target.value)}
                                            required />
                                        Noite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='cont-addCurso-form'>
                        <div className='name-acro'>
                            <div className='input-name'>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nome do Curso:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nomedoCurso}
                                        onChange={e => setNomedoCurso(e.target.value)}
                                        required />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Acrônimo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={acronimo}
                                    onChange={e => setAcronimo(e.target.value)}
                                    required />
                            </Form.Group>
                        </div>

                        <input
                            className='periodo-taker'
                            type="text"
                            value={periodo}
                            onChange={e => setPerido(e.target.value)}
                            required />

                        <div className='btn-addCurso-cont'>
                            <Button variant='warning'> Consultar </Button>
                            <Button onClick={createCourse}> Enviar </Button>
                            <Button variant='danger'>Deletar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index