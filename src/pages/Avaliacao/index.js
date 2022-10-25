import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import TextArea from '../../components/TextArea/index.js';
import '../../styles/avaliacao.css';
import { MdPictureAsPdf } from "react-icons/md";
import { useReactToPrint } from "react-to-print";



 //function Index() {



//   function gerarPdf(){}
const App = () => {  

  const [ano, setAno ] = useState('');
  const [nome, setNome] = useState('');
  const [modulo, setModulo] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso ] = useState('');
  const [professor, setProfessor ] = useState('');
  const [tema, setTema ] = useState('');
  const [analise, setAnalise ] = useState('');
  const [rs, setRs ] = useState('');
  const [data, setData ] = useState('');

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <>
      <Btn />
      <div className='cont-pai'>
        <div ref={componentRef} className='doc-pag'>
          <header className='doc-header'>
            <h2 className='doc-name'>FICHA DE AVALIAÇÃO DO TCC </h2>
            <InputGroup className="mb-3">
              <InputGroup.Text onChange={e => setAno(e.target.value)}>AVALIAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC - ANO:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <div>
              <InputGroup className="mb-3" >
                <InputGroup.Text onChange={e => setNome(e.target.value)}>Aluno(a):</InputGroup.Text>
                <Form.Control />
              </InputGroup>
              <InputGroup className="mb-3" >
                <InputGroup.Text onChange={e => setModulo(e.target.value)}>Módulo:</InputGroup.Text>
                <Form.Control />
              </InputGroup>
              <InputGroup className="mb-3" >
                <InputGroup.Text onChange={e => setTurma(e.target.value)}>Turma:</InputGroup.Text>
                <Form.Control />
              </InputGroup>
            </div>
            <InputGroup className="mb-3" >
              <InputGroup.Text onChange={e => setCurso(e.target.value)}>Habilitação Profissional Técnica de Nível Médio de Técnico em:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text onChange={e => setProfessor(e.target.value)}>Professor Responsável:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text onChange={e => setTema(e.target.value)}>Tema do Trabalho:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
          </header>
          <div >
            <p className='doc-text-obg'>Trabalho Escrito (obrigatório) </p>
            <p className='doc-text'>Análise (Considerando os critérios adotados):</p>
            <TextArea />
            <p className='doc-text'>O Trabalho de Conclusão de Curso – TCC, submetido à avaliação
              docente, atendeu as exigências estabelecidas no Plano de Curso da Habilitação
              Profissional, correspondendo à carga horária suplementar de 120 horas a
              serem certificadas no Histórico Escolar.
            </p>
            <InputGroup className="mb-3" >
              <InputGroup.Text onChange={e => setRs(e.target.value)}>RS do Professor Responsável:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text onChange={e => setData(e.target.value)}>Data:</InputGroup.Text>
              <Form.Control type='date' />
            </InputGroup>
            <InputGroup className="mb-3" >
              <InputGroup.Text>VALIDAÇÃO DO TRABALHO DE CONCLUSÃO DE CURSO – TCC – ANO:</InputGroup.Text>
              <Form.Control />
            </InputGroup>
            
          </div>
        </div>
        <Button className='btn-avaliacao' onClick={handlePrint}> <MdPictureAsPdf/> Enviar </Button>
      </div>

    </>
  )
}

export default App;

