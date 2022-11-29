import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index.js';
import Logo from '../../components/Logo/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BtnCoord from '../../components/BotaoCoord/index.js';
import '../../styles/main.css';




function index() {
  try{
  const usuarioLogadoString =  localStorage.getItem('_user_logado')
    const usuarioLogado = JSON.parse(usuarioLogadoString)

    console.log(usuarioLogado)
    var user = usuarioLogado
  }catch{
  }
  return (
    <>
      <BtnCoord />
      <h1>Bem vindo {user}</h1>
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

