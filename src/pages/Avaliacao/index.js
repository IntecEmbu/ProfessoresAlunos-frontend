import React from 'react'
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import '../../styles/main.css';
import '../../styles/avaliacao.css';



function index() {
    return (
        <>
          <div className='linha'>
            <div className='doc-body'>
              <header>
                <h3>AVALIAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC - ANO </h3>
                <p>Aluno(a):</p>
                <p>Habilitação Profissional Técnica de Nível Médio de Técnico em:</p>
              </header>
            </div>
          </div>
            
        </>
    )
}

export default index

