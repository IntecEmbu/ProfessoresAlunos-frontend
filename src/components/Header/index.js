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
        <Container className='teste'>
          <img className="HeaderLogo" src={Imagem} />
          <Navbar.Brand ><Link to='/' className='HeaderLink'>INTEC</Link></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link> <Link to='/Login' className='HeaderLink'>Login</Link> </Nav.Link>
            <Nav.Link> <Link to='/Cadastro' className='HeaderLink'>Cadastrar</Link> </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default index