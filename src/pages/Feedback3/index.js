import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import Pesquisa from '../../components/Pesquisa/index.js';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ModalDescricao from '../../components/ModalDescricao/index.js';
import '../../styles/feedback1.css';
import '../../styles/avaliacao2.css';


function Index() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState([]);
    const [descricao, setDescricao] = useState('');
    const [material, setMaterial] = useState('');
    const [loadModalDescricao, setModalDescricao] = useState(false)
    const [feedItem, setFeedItem] = useState('')

    useEffect(() => {

        async function getFeed() {
            const { data } = await axios.get(' http://localhost:8080/darfeed ');
            setMaterial(data);
            setNome(data);
            setEmail(data);
            setFeedback(data);
            setDescricao(data);
        }
        getFeed();
    }, []);


    function showDescricao(feedback) {
        setModalDescricao(true);
        setFeedItem(feedback);
    }

    return (
        <>
            {loadModalDescricao && <ModalDescricao isOpen={loadModalDescricao} dataGender={feedItem} />}
            <Btn />
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
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Materia</th>
                                    <th>Feedback</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    feedback.map((feedbac) => (
                                        <tr key={feedbac.id_feedback}>
                                            <td>{feedbac.id_feedback}</td>
                                            <td>{feedbac.nome}</td>
                                            <td>{feedbac.material}</td>
                                            <td>{feedbac.feedback}</td>
                                            <td>
                                                <Button
                                                onClick={() => showDescricao(feedbac)}
                                                >Vizualizar descrição</Button>
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
