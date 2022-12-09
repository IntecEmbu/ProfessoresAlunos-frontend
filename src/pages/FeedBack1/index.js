import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import Pesquisa from '../../components/Pesquisa/index.js';
import ModalMaterialFeed from '../../components/ModalMaterialFeed/index.js';
import Table from 'react-bootstrap/Table';
import '../../styles/feedback1.css';
import api2 from '../../config/configApi2.js'
import axios from "axios";


function Index() {

  const [material, setMaterial] = useState([]);
  const [assunto, setAssunto] = useState([]);

  const baixar = async e => {
    let d = document.createElement("iframe");
    d.setAttribute("src", "http://localhost:3333/dowload")
    document
      .querySelector("#baixar")
      .appendChild(d)
      .setAttribute("style", "display: none");
  }
  const [loadModalAdd, setModalAdd] = useState(false);

  function showAddModal() {
    setModalAdd(true);
    console.log('sssss')
  }
  const [image, setImage] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });
  const UploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

    await api2.post("/PostMat", formData, headers)
      .then((response) => {
        setStatus({
          type: 'success',
          mensagem: response.data.mensagem
        });
      }).catch((err) => {
        if (err.response) {
          setStatus({
            type: 'error',
            mensagem: err.response.data.mensagem
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Tente mais tarde!"
          });
        }
      });
  }
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  const getImages = async () => {

    await api2.get("/ListMat")
      .then((response) => {
        console.log(response.data);
        setData(response.data.images);
        setUrl(response.data.url);
      }).catch((err) => {
        console.log(err.response);
      })
  }

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {

    async function getMaterial() {
      const { data } = await axios.get(' http://localhost:8080/material ');
      setMaterial(data);
      setAssunto(data);
    }
    getMaterial();
  }, []);

  return (
    <>
      {loadModalAdd && <ModalMaterialFeed data-backdrop='static' isOpen={loadModalAdd} />}

      <Btn />
      <div className='pai-feedback'>
        <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
        <header className='Form-header'>
          <div className='cont-pesquisa'>
            <Pesquisa className='pesquisa-avaliacao' />
            <Link to='/Feedback3'>
              {/* {sessionStorage.getItem("registro_numero") !== null ? :''}*/}
              <Button>Ver Feedbacks</Button>
            </Link>
            <Button onClick={showAddModal} >Adicionar Material</Button>
          </div>
        </header>
        <body className='bodyForm1'>
          {/* <div className='divTurmas'>
                             <p className='texto-divturma'>Professor</p>
                            <p className='texto-divturma'>PW III</p>
                            <p className='texto-divturma'>Matéria: Node.js</p>
                            <Link to='/Feedback2'>
                                <Button className='btnAvancar'>Avançar</Button>
                            </Link>
                        </div> */}
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>id</th>
                <th>Assunto</th>
                <th>Materia</th>
              </tr>
            </thead>
            <tbody >
              {
                material.map((materia) => (
                  <tr key={materia.id}>
                    <td>{materia.id}</td>
                    <td>{materia.assunto}</td>
                    <td>{materia.material}</td>
                    <td>
                      <Link to="/Feedback2">
                        <Button>Acessar</Button>
                      </Link>
                    </td>

                    {/* Botao de excluir */}
                    <td>
                      <Button
                        variant="danger"
                        onClick={baixar}
                      >Baixar pdf
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </body>
        <div id="baixar">

        </div>
        <div className="img">
        </div>
      </div>
    </>
  )
}

export default Index

