import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Pesquisa from '../../components/Pesquisa/index.js';
import Table from 'react-bootstrap/Table';
import '../../styles/feedback1.css';
import '../../styles/avaliacao2.css';


function index() {
    return (
        <>
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
                <div className='containerFeed'>
                    <header className='ava-header'>
                        <div className='pog'>
                            <Pesquisa className='pesquisa-avaliacao' /> 
                        </div>
                    </header>
                    <body className='bodyForm1'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Turma</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
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

export default index
