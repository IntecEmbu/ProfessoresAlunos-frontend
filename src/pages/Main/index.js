import React from 'react'
import Carousel from '../../components/Carousel';
import CardGroup from '../../components/Card/index.js';
import Logo from '../../components/Logo/index.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BtnCoord from '../../components/BotaoCoord/index.js';
import NamePrincipal from '../../components/NomeExibicao/index.js';
import jwt_decode from 'jwt-decode'
import '../../styles/main.css';




function index() {
    const usuarioLogadoString = sessionStorage.getItem('jwt')
    const usuarioLogado = jwt_decode(usuarioLogadoString)
    var user = usuarioLogado.infoUser.id_login

    console.log(user)
  return (
    <>
      <BtnCoord />
      {/* <h1>Bem vindo {user}</h1> */}
      <div className='linha'>
        <main>
          <Container fluid >
            <Row>
              <NamePrincipal />
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

