import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../../StyleComponents/itemobs.css';


function index({ title, titleSub, text }) {
  return (

    <div className='coll'>
      <Card style={{ width: '18rem', margin: '50px' }} >
        {/* <Card.Img variant="top" src={src} /> */}
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Title>{titleSub}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Link to='/Observatorio/Detalhes'><Button variant="primary" >Acessar</Button></Link>
        </Card.Body>
      </Card>
    </div>


  )
}

export default index