import React, { useState } from "react";
import Modal from 'react-modal';
import axios from 'axios'


 function Index({ isOpen, dataFeed }) {

  const [modalIsOpen, setIsOpen] = useState(isOpen);


  function closeModal() {
    setIsOpen(false)
  }

  async function handleDeleteFeed() { 
  
    const feedData = {
      "id_material":dataFeed.id_material
    }

    try{
    await axios.delete(`http://localhost:8080/material/${dataFeed.id_material}`);
    window.location.reload(true);
    }catch(err){
        alert(`nao foi possivel deletar \n Erro: ${err}`)
    }

  }

  return (
    <>
      <div>
        <Modal
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

        </Modal>
      </div>
    </>
  )
}

export default Index