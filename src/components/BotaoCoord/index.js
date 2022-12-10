import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
import jwt_decode from 'jwt-decode'
import '../../StyleComponents/btnCoord.css';



function Index() {
  const usuarioLogadoString = sessionStorage.getItem('jwt')
  const usuarioLogado = jwt_decode(usuarioLogadoString)
  var user = usuarioLogado.infoUser.id_login

  return (
    <>
      {user.registration_class === 'RM' &&(
        <div className='cont-btn-coord'>
          <Link to='/CoordFunc'>
            <AiFillSetting size={'3em'} className='btn-color' />
          </Link>
          <p className='p-style'>Coordenador</p>
        </div>
        )}
    </>
  )
}

export default Index