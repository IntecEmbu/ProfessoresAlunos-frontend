import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import '../../styles/cadastro.css';



function index() {
    return (
        <>
            <div className='cadastro-cont'>
                <img className="cadastro-Logo" src={Imagem} />
                <h3 className='tittle-cad'>Faça seu cadastro</h3>
                <Form>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Classe:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </div>
                    <fieldset class="">
                        <div class="">
                            <h6 class="">Tipo de conta:</h6>
                            <div class="">
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao1"></input>
                                    <label class="" for="gridRadios1">
                                        RM
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2"></input>
                                    <label class="" for="gridRadios2">
                                        RA
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2"></input>
                                    <label class="" for="gridRadios2">
                                        GT
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de registro:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Data de nascimento:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </div>
                    <fieldset class="">
                        <div class="">
                            <h6 class="">Horário de curso:</h6>
                            <div class="">
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao1"></input>
                                    <label class="" for="gridRadios1">
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2"></input>
                                    <label class="" for="gridRadios2">
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="opcao2"></input>
                                    <label class="" for="gridRadios2">
                                        Noite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check label=" Li e concordo com os termos de uso" id="box-check" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar-se
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default index