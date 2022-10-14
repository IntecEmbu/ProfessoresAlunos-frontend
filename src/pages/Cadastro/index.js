import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagem from '../../components/Imagens/transparente.png';
import api from '../../service/api';
import '../../styles/cadastro.css';



function Index(e) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [regClass, setRegClass] = useState('');
    const [userName, setUserName] = useState('');
    const [birth, setBirth] = useState('');
    const [amCourse, setAmCourse] = useState('');
    const [pmCourse, setPmCourse] = useState('');
    const [nCourse, setNCourse] = useState('');
    const [phone, setPhone] = useState('');
    const [turno, setTurno] = useState('');


    async function createUser() {
        try {
            await api.post('/user', {
                email, password, userName, regClass,
                regNumber, birth, amCourse, pmCourse, nCourse, phone, turno
            })

            alert(`Usuario ${userName} cadastrado com sucesso`)
        }
        catch (err) {
            alert(`Houve um erro: ${err}`)
        }
    }
    return (
        <>
            <div className='cadastro-cont'>
                <img className="cadastro-Logo" src={Imagem} />
                <h3 className='tittle-cad'>Faça seu cadastro</h3>
                <Form>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário:</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Classe:</Form.Label>
                            <Form.Control
                                type="text"
                                value={regClass}
                                onChange={e => setRegClass(e.target.value)}
                                disabled />
                        </Form.Group>
                    </div>
                    <fieldset class=""
                        value={regClass}
                        onChange={e => setRegClass(e.target.value)}>
                        <div class="" >
                            <h6 class="">Tipo de conta:</h6>
                            <div class="" className='cont-tipo'>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="RM" required></input>
                                    <label class="" for="gridRadios1">
                                        RM
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="RA" required></input>
                                    <label class="" for="gridRadios2">
                                        RA
                                    </label>
                                </div>
                                <div class="">
                                    <input class="" type="radio" name="gridRadios" id="" value="GT" required></input>
                                    <label class="" for="gridRadios2">
                                        GT
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className='user-text'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Número de registro:</Form.Label>
                            <Form.Control
                                type="number"
                                value={regNumber}
                                onChange={e => setRegNumber(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Data de nascimento:</Form.Label>
                            <Form.Control
                                type="date"
                                value={birth}
                                onChange={e => setBirth(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Turno</Form.Label>
                            <Form.Control
                                type="text"
                                value={turno}
                                onChange={e => setTurno(e.target.value)}
                                disabled />
                        </Form.Group>

                    </div>
                    <fieldset 
                    class=""
                    value={turno}
                    onChange={e => setTurno(e.target.value)} >
                        <div class="">
                            {/* <h6 class="">Horário de curso:</h6> */}
                            <div class="" className='cont-tipo'>
                                <div class="" >
                                    <input
                                        class=""
                                        type="radio"
                                        name="gridRadios"
                                        id=""
                                        value="Manhã"
                                        required></input>
                                    <label class="" for="gridRadios1">
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <input
                                        class=""
                                        type="radio"
                                        name="gridRadios"
                                        id=""
                                        value= "Tarde"
                                        required></input>
                                    <label class="" for="gridRadios2">
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <input
                                        class=""
                                        type="radio"
                                        name="gridRadios"
                                        id=""
                                        value="Noite"
                                        required></input>
                                    <label class="" for="gridRadios2">
                                        Noite
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check label=" Li e concordo com os termos de uso" id="box-check" required />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={createUser} >
                        Cadastrar-se
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Index