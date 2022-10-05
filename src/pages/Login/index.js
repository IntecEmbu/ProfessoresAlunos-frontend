import React, { useCallback } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import { useState } from 'react';
import '../../styles/login.css';


function Index() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        console.log(userName, password)
    },
    [userName, password]
    );

    return (
        <>
            <div className='login-cont'>
                <img className="Login-Logo" src={Imagem} />
                <Form onSubmit={handleSubmit}>
                    <div className='form-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" onChange={(event) => setUserName(event.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" onChange = {(event) => setPassword(event.target.value)}  required/>
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit" >
                        Entrar
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Index
