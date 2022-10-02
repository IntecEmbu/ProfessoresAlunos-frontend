import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import '../../styles/login.css';



function index() {
    return (
        <>
            <div className='login-cont'>
                <img className="Login-Logo" src={Imagem} />
                <Form>
                    <div className='form-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit">
                        Entrar
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default index
