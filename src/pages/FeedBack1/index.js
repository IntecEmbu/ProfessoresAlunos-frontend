import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import Pesquisa from '../../components/Pesquisa/index.js';
import '../../styles/feedback1.css';



function index() {
    return (
        <>
            <Btn />
            <div className='pai'>
                <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
                <div className='containerFeed'>
                    <header className='Form-header'>
                        <div className='cont-pesquisa'>
                            <Pesquisa className='pesquisa-avaliacao' />
                            <Link to='/Feedback3'>
                                <Button>Ver Feedbacks</Button>
                            </Link>
                        </div>
                    </header>
                    <body className='bodyForm1'>
                        <div className='divTurmas'>
                            <p className='texto-divturma'>Professor</p>
                            <p className='texto-divturma'>PW III</p>
                            <p className='texto-divturma'>Matéria: Node.js</p>
                            <Link to='/Feedback2'>
                                <Button className='btnAvancar'>Avançar</Button>
                            </Link>
                        </div>
                    </body>
                </div>
            </div>
        </>
    )
}

export default index

