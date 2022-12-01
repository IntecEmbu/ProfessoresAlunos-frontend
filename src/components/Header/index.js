import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { json, Link } from 'react-router-dom';
import Imagem from '../Imagens/transparente.png';
import api from '../../service/api.js';
import '../../StyleComponents/Header.css';
import Button from "react-bootstrap/Button";
function Index() {

   
    // const usuarioLogadoString =  localStorage.getItem('_user_logado')
    // const usuarioLogado = JSON.parse(usuarioLogadoString)

    // console.log(usuarioLogado)
    // const user = usuarioLogado
    async function logout() {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/';
  }
  return (
    <>
      <Navbar bg="white" expand="lg" className='cont-nav'>
        <Link to='/' className="HeaderLogo"><img className="HeaderLogo" src={Imagem} /></Link>
        <Link to='/' className='HeaderLink'><h4 className='HeaderLink'>INTEC</h4></Link>
        <Nav.Link> <Link to='/Login' className='Header-cad'>Login</Link> </Nav.Link>
        <Nav.Link> <Link to='/Cadastro' className='Header-log'>Cadastrar</Link> </Nav.Link>
        <Button variant="primary" type="submit" onClick={logout}>
            sair
          </Button>
      </Navbar>
      


    </>
  )
}

export default Index