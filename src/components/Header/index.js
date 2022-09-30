import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import Imagem from '../Imagens/transparente.png';
import { GrBook, GrPersonalComputer, GrMailOption } from "react-icons/gr";
import { AiOutlineTeam } from "react-icons/ai";
import '../../StyleComponents/Header.css';

function index() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container className='justify_tittle' >
          <Link to='/' className="HeaderLogo"><img className="HeaderLogo" src={Imagem} /></Link>
          <h4 className='HeaderLink'>INTEC</h4>
        </Container>

        <Nav.Link> <Link to='/Login' className='Header-cad'>Login</Link> </Nav.Link>
        <Nav.Link> <Link to='/Cadastro' className='Header-log'>Cadastrar</Link> </Nav.Link>

      </Navbar>


    </>
  )
}

export default index