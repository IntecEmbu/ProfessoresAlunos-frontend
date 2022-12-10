import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsFillHandThumbsUpFill, BsFillFileEarmarkCheckFill } from 'react-icons/bs'
import jwt_decode from 'jwt-decode'
import '../../StyleComponents/Card.css'


function Index() {
  const usuarioLogadoString = sessionStorage.getItem('jwt')
  const usuarioLogado = jwt_decode(usuarioLogadoString)
  var user = usuarioLogado.infoUser.id_login

  return (
    <>
      <CardGroup className='CardG'>

        {user.registration_class === 'RM' && (
          <Card className='ItemCard1'>
            <Link to='/avaliacoes' className='CardLink'>
              <Card.Body className='body'>
                <BsFillFileEarmarkCheckFill size={'4em'} />
                <Card.Title>Avaliação do TCC</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        )}

        {user.registration_class === 'GT' &&(
          <Card className='ItemCard1'>
            <Link to='/avaliacoes' className='CardLink'>
              <Card.Body className='body'>
                <BsFillFileEarmarkCheckFill size={'4em'} />
                <Card.Title>Avaliação do TCC</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        )}


      {user.registration_class != 'GT' &&(
        <Card className='ItemCard1'>
          <Link to='/Feedback1' className='CardLink'>
            <Card.Body className='body'>
              <BsFillHandThumbsUpFill size={'4em'} />
              <Card.Title>Feedback</Card.Title>
            </Card.Body>
          </Link>
        </Card>
        )}

        {user.registration_class === 'RM' && (
          <Card className='ItemCard1'>
            <Link to='/Observatorio' className='CardLink'>
              <Card.Body className='body'>
                <BsFillEyeFill size={'4em'} />
                <Card.Title>Observatório</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        )}

      </CardGroup>
    </>
  )
}

export default Index