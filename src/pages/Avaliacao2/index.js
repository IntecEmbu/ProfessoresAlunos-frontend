import React, { useEffect, useState } from 'react';
import Btn from '../../components/BotaoFlutuante';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pesquisa from '../../components/Pesquisa/index.js';
import Table from 'react-bootstrap/Table';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import '../../styles/feedback1.css';
import '../../styles/avaliacao2.css';
import ModalConsulta from '../../components/ModalAvalicao/index.js';

function Index() {

    const [avaliacao, setAvalaciao] = useState([]);
    const [loadModalAdd, setModalAdd] = useState(false);

    function showAddModal() {
        setModalAdd(true);
    }

    useEffect(() => {

        async function getGender() {
            const { data } = await axios.get(' http://localhost:8080/avalicao ');
            setAvalaciao(data);
        }
        getGender();
    }, []);

    const usuarioLogadoString = sessionStorage.getItem('jwt')
    const usuarioLogado = jwt_decode(usuarioLogadoString)
    var user = usuarioLogado.infoUser.id_login

    let navigate = useNavigate();

    useEffect(() => {
        if (user.registration_class !== 'RA') {
            navigate('/Avaliacoes')
        }
        else {
            navigate('/')
        }
    }, [])

    return (
        <>
         {loadModalAdd && <ModalConsulta data-backdrop='static' isOpen={loadModalAdd} />}
            <Btn />
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC AVALIAÇÕES</h1>
                <div className='containerFeed'>
                    <header className='ava-header'>
                        <div className='pog'>
                            {user.registration_class === 'RM' && (
                                <>
                                    <Pesquisa className='pesquisa-avaliacao' />
                                    <Link to='/avaliacao'>
                                        <Button>Avaliar</Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>
                    <body className='bodyForm1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Aluno</th>
                                    <th>Turma</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    avaliacao.map((avaliaca) => (
                                        <tr key={avaliaca.id_avaliacao}>
                                            <td>{avaliaca.id_avaliacao}</td>
                                            <td>{avaliaca.aluno}</td>
                                            <td>{avaliaca.turma}</td>
                                            <td>{avaliaca.Ano}</td>
                                            <td>
                                                <Button
                                                onClick={() => showAddModal(avaliaca)}
                                                >Avaliar</Button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </body>
                </div>
            </div>
        </>
    )
}

export default Index
