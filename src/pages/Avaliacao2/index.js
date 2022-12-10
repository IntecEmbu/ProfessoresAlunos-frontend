import React,{useEffect} from 'react';
import Btn from '../../components/BotaoFlutuante';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pesquisa from '../../components/Pesquisa/index.js';
import Table from 'react-bootstrap/Table';
import jwt_decode from 'jwt-decode'
import '../../styles/feedback1.css';
import '../../styles/avaliacao2.css';


function Index() {
    const usuarioLogadoString = sessionStorage.getItem('jwt')
    const usuarioLogado = jwt_decode(usuarioLogadoString)
    var user = usuarioLogado.infoUser.id_login

    let navigate = useNavigate();

    useEffect(()=>{
        if(user.registration_class === 'RM' || 'GT'){
            navigate('/Avaliacoes')
        }
        else{
            navigate('/')
        }
    },[])

    return (
        <>
            <Btn />
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC AVALIAÇÕES</h1>
                <div className='containerFeed'>
                    <header className='ava-header'>
                        <div className='pog'>
                            <Pesquisa className='pesquisa-avaliacao' />
                            <Link to='/avaliacao'>
                                <Button>Avaliar</Button>
                            </Link>
                        </div>
                    </header>
                    <body className='bodyForm1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Aluno</th>
                                    <th>Turma</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>João</td>
                                    <td>3 DSN</td>
                                    <td>2022</td>
                                    <td>
                                        <Link to='/avaliacao'>
                                            <Button>Acessar</Button>
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </body>
                </div>
            </div>
        </>
    )
}

export default Index
