import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Btn from '../../components/BotaoFlutuante';
import TextArea from '../../components/TextArea/index.js';
import '../../styles/observatorio2.css';
import '../../styles/main.css';
import api from '../../config/configApi.js'


function Index() {

  const [image, setImage] = useState('');
  const [endImg] = useState('../../../logo192.png');
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
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');

  const getImages = async () => {

    await api.get("/list-image")
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

  return (
    <>
      <Btn />
      <div className='contanier-obs2'>
        <header className='header-obs2'>
          {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
          {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
          
          <form onSubmit={UploadImage}>
            <label >Imagem: </label>
            <input type="file" name="image" className='btnMargin' onChange={e => setImage(e.target.files[0])} /><br /><br />

            {image ? <img src={URL.createObjectURL(image)} alt="Imagem" width="150" height="150" /> : <img src={endImg} alt="Imagem" width="150" height="150" />}

            <Button variant="primary" type="submit" className='btnMargin'>Adicionar documento</Button>
          </form>
        </header>
        <main>
          <Container fluid >
            <div className="img">

              {data.map(image => (
                <div key={image.id}>
                  <img src={url + image.image} alt={image.id} width="150" />
                  <hr />
                </div>
              ))}

            </div>
          </Container>
          <TextArea />
        </main>
      </div>
    </>
  );

}


export default Index;

