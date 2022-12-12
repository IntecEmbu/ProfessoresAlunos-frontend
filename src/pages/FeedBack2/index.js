import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Btn from '../../components/BotaoFlutuante';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import api from '../../service/api';
import '../../styles/feedback2.css';




function Index(e) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [descricao, setDescricao] = useState('');
    const [material, setMaterial] = useState('');

    async function giveFeedback() {
        try {
            await api.post('/darfeed', {
                nome, email,material, feedback, descricao 
            })
            alert('Feedback realizado com sucesso')
        }
        catch (err) {
            alert(`Houve um erro: ${err}`)
        }
    }


    return (
        <>
            <Btn />
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC REALIZAR FEEDBACK</h1>
                <div className='containerFeed'>
                    <body className='bodyForm'>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Nome:</InputGroup.Text>
                            <Form.Control
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                                required />
                        </InputGroup>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text>Email Institucional:</InputGroup.Text>
                            <Form.Control
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Material:</InputGroup.Text>
                            <Form.Control
                                value={material}
                                onChange={e => setMaterial(e.target.value)}
                                required />
                        </InputGroup>
                        <p>Avalie o Material de aula em:</p>
                        <select
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                            className='selectfeed'
                            required>
                            <option></option>
                            <option>Insatisfatorio</option>
                            <option>Satisfatorio</option>
                        </select>
                        <p>Descreva a avaliação:</p>
                        <textarea
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                            className='textfeedback'
                            maxLength={600}
                        ></textarea>
                        <div className='btn-dafeedback'>
                            <Link to='/Feedback1'>
                                <Button variant="danger" className='btnCancelar'> Cancelar </Button>
                            </Link>
                            <Button
                                onClick={giveFeedback}
                            > Realizar Feedback </Button>
                        </div>
                    </body>
                </div>
            </div>
        </>
    )
}

export default Index

