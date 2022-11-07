import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index.js';
import Logo from '../../components/Logo/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BtnCoord from '../../components/BotaoCoord/index.js';
import '../../styles/main.css';




function index() {
  return (
    <>
      <BtnCoord />
      <div className='linha'>
        <main>
          <Container fluid >
            <Row>
              <header>
                <Carousel />
                <Logo />
              </header>
              <CardGroup />
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default index

