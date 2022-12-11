import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import '../../StyleComponents/modalDelemat.css';
import axios from 'axios'


function Index({ isOpen, dataFeed, onRequestClose, title }) {

  const [modalIsOpen, setIsOpen] = useState(isOpen);


  function closeModal() {
    setIsOpen(false)
  }

  async function handleDeleteFeed() {
    
    const feedData = {
      "id_material": dataFeed.id_material
    }

    try {
      await axios.delete(`http://localhost:8080/material/${dataFeed.id_material}`);
      window.location.reload(true);
    } catch (err) {
      alert(`nao foi possivel deletar \n Erro: ${err}`)
    }

  }

  return (
    <>
      <div>
        <Modal
          show={isOpen}
          backdrop="static"
        >
          <div className="color-dele">
            <Modal.Header>
              <Modal.Title>Tem certeza que deseja excluir o material selecionado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="btn-modal-dele">
                <Button
                  variant="primary"
                  type="submit"
                  name="action"
                  onClick={() => { window.location.reload(true) }}
                >Cancelar</Button>

                <Button
                  variant="danger"
                  type="submit"
                  name="action"
                  onClick={() => { handleDeleteFeed() }}
                >Excluir</Button>
              </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </div>
        </Modal>
        {/* <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h2>Tem certeza que deseja excluir o material selecionado</h2>

              <button className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={() => {window.location.reload(true)}}
              >Cancelar</button>

              <button className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={() => {handleDeleteFeed()}}
              >Excluir</button>

        </Modal> */}
      </div>
    </>
  )
}

export default Index