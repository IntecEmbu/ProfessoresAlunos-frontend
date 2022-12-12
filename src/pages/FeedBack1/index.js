import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import Pesquisa from '../../components/Pesquisa/index.js';
import ModalMaterialFeed from '../../components/ModalMaterialFeed/index.js';
import ModalDeleteGender from '../../components/ModalDeleteFeed/index.js';
import ModalUpdateGender from '../../components/ModalAttFeed/index.js';
import Table from 'react-bootstrap/Table';
import '../../styles/feedback1.css';
import api2 from '../../config/configApi2.js'
import jwt_decode from 'jwt-decode';
import axios from "axios";


function Index() {


  const [feedItem, setFeedItem] = useState('');
  const [loadModalAdd, setModalAdd] = useState(false);
  const [gender, setGender] = useState([]);
  const [assunto, setAssunto] = useState([]);
  const [loadModalUpdate, setModalUpdate] = useState(false);
  const [genderItem, setGenderItem] = useState('');
  const [loadModalDelete, setModalDelete] = useState(false);



  const usuarioLogadoString = sessionStorage.getItem('jwt')
  const usuarioLogado = jwt_decode(usuarioLogadoString)
  var user = usuarioLogado.infoUser.id_login


  // const baixar = async e => {
  //   let d = document.createElement("iframe");
  //   d.setAttribute("src", "http://localhost:3333/dowload")
  //   document
  //     .querySelector("#baixar")
  //     .appendChild(d)
  //     .setAttribute("style", "display: none");
  // }

  function showAddModal() {
    setModalAdd(true);
  }

  function showUpdateGender(gender) {
    setModalUpdate(true);
    setGenderItem(gender);
  }

  function showDeleteGender(gender) {
    setModalDelete(true);
    setGenderItem(gender);

  }

  // const [image, setImage] = useState('');
  // const [status, setStatus] = useState({
  //   type: '',
  //   mensagem: ''
  // });
  // const UploadImage = async e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('image', image);

  //   const headers = {
  //     'headers': {
  //       'Content-Type': 'application/json'
  //     }
  //   }

  //   await api2.post("/PostMat", formData, headers)
  //     .then((response) => {
  //       setStatus({
  //         type: 'success',
  //         mensagem: response.data.mensagem
  //       });
  //     }).catch((err) => {
  //       if (err.response) {
  //         setStatus({
  //           type: 'error',
  //           mensagem: err.response.data.mensagem
  //         });
  //       } else {
  //         setStatus({
  //           type: 'error',
  //           mensagem: "Erro: Tente mais tarde!"
  //         });
  //       }
  //     });
  // }
  // const [data, setData] = useState([]);
  // const [url, setUrl] = useState('');

  // const getImages = async () => {

  //   await api2.get("/ListMat")
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data.images);
  //       setUrl(response.data.url);
  //     }).catch((err) => {
  //       console.log(err.response);
  //     })
  // }

  // useEffect(() => {
  //   getImages();
  // }, []);

  // useEffect(() => {

  useEffect(() => {

    async function getGender() {
      const { data } = await axios.get(' http://localhost:8080/gender ');
      setGender(data);
      setAssunto(data);
    }
    getGender();
  }, []);

  return (
    <>
      {loadModalAdd && <ModalMaterialFeed isOpen={loadModalAdd} />}
      {loadModalUpdate && <ModalUpdateGender isOpen={loadModalUpdate} dataGender={genderItem} />}
      {loadModalDelete && <ModalDeleteGender isOpen={loadModalDelete} dataGender={genderItem} />}


      <Btn />
      <div className='pai-feedback'>
        <h1 className='IntecFeed'>INTEC FEEDBACK</h1>
        <header className='Form-header'>
          <div className='cont-pesquisa'>
            <Pesquisa className='pesquisa-avaliacao' />
            {user.registration_class === 'RM' && (
              <>
                <Link to='/Feedback3'>
                  <Button>Ver Feedbacks</Button>
                </Link>

                <Button
                  onClick={showAddModal}
                >Adicionar Material
                </Button>
              </>
            )}
          </div>
        </header>
        <body className='bodyForm1'>
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
                gender.map((gende) => (
                  <tr key={gende.id_genero}>
                    <td>{gende.id_genero}</td>
                    <td>{gende.genero}</td>
                    <td>{gende.assunto}</td>
                    <td>
                      <Link to="/Feedback2">
                        <Button>Acessar</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="warning"
                      // onClick={baixar}
                      >Baixar pdf
                      </Button>
                    </td>
                    {user.registration_class === 'RM' && (
                      <>
                        <td>
                          <Button
                            variant='success'
                            onClick={() => showUpdateGender(gende)}
                          >Atualizar
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => showDeleteGender(gende)}
                          >Excluir
                          </Button>
                        </td>
                      </>
                    )}
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

