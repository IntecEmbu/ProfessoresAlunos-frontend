import React from 'react';
import { Card } from 'react-bootstrap';
import '../../StyleComponents/nomeExibicao.css';

function index() {

  return (
    <>
      {sessionStorage.getItem("_user_logado") !== null ?
        <div >
          <Card className='usuario-logado' >
            <Card.Body >
              <Card.Title>{sessionStorage.getItem('_user_logado')}, seja bem-vindo (a)!</Card.Title>
              {/* <Card.Title>RM: {numeroRM}</Card.Title>  */}
            </Card.Body>
          </Card>
        </div>
        : ''}
    </>
  )
}

export default index