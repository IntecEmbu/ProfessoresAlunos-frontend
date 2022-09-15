import React from 'react';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Btn from '../../components/BotaoFlutuante';
import Adicoes from '../../components/ObservatorioDetalhes/index.js';
import TextArea from '../../components/TextArea/index.js';
import { adicoes } from './Adicoes.js';
import '../../styles/observatorio.css';



function index() {
  return (
    <>
      <Btn />
      <div className='contanier-obs'>
        <main className='main-obs'>
          <header className='header-obs2'>
            <h1 className='Intecobs'>INTEC OBSERVATÓRIO</h1>
          </header>
          <body className='body-obs'>
            <Button variant="primary">
              Adicionar Documento
            </Button>
            <Container fluid >
              <Row xs={1} md={4} >
                {adicoes.map(item => {
                  return (
                    <Adicoes
                      src={item.src}
                    />
                  );
                })}
              </Row>
            </Container>
            <div className='testeArea'>
              <TextArea />
            </div>
          </body>
        </main>
      </div>
    </>
  )
}

export default index;