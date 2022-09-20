import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Btn from '../../components/BotaoFlutuante';
import Adicoes from '../../components/ObservatorioDetalhes/index.js';
import TextArea from '../../components/TextArea/index.js';
import { adicoes } from './Adicoes.js';
import '../../styles/observatorio.css';
import  api from '../../config/configApi.js'


function Index() {

  const [image, setImage] = useState('');
  const [endImg] = useState('../../../logo192.png');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const uploadImage = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      'headers': {
        'Content-Type': 'application/json'
      }
    }

    await api.post("/upload-image", formData, headers)
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
  return (
    <>
      <Btn />
      <div className='contanier-obs'>
        <main className='main-obs'>
          <header className='header-obs2'>
            <h1 className='Intecobs'>INTEC OBSERVATÓRIO</h1>
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}

            <form onSubmit={uploadImage} className='upload'>
              <label >Imagem: </label>
              <input type="file" name="image" className='btnMargin' onChange={e => setImage(e.target.files[0])} /><br /><br />

              {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img src={endImg} alt="Imagem" width="150" height="150" />}

              <Button variant="outline-secondary" type="submit" className='btnMargin' >
                Salvar
              </Button>
            </form>
          </header>
          <body className='body-obs'>
            <Container fluid >
              <Row xs={1} md={4} >
                {adicoes.map(item => {
                  return (
                    <Adicoes
                      src={item.src}
                    />
                  );
                })}
              </Row>
            </Container>
            <TextArea />
          </body>
        </main>
      </div>
    </>
  )
}

export default Index;