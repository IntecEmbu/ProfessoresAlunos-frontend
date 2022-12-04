import React from 'react';
import { Card } from 'react-bootstrap';
import '../../StyleComponents/nomeExibicao.css';

function index() {
  const user = sessionStorage.getItem('_user_logado')
  return (
    <>
      {user !== null ?
        <div >
          <Card className='usuario-logado' >
            <Card.Body >
              <Card.Title>{user}, seja bem-vindo (a)!</Card.Title>
              {/* <Card.Title>RM: {numeroRM}</Card.Title>  */}
            </Card.Body>
          </Card>
        </div>
        : ''}
    </>
  )
}

export default index