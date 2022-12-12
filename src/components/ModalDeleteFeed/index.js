// import React, { useState } from "react";
// import Modal from 'react-bootstrap/Modal';
// import { Button } from 'react-bootstrap';
// import '../../StyleComponents/modalDelemat.css';
// import axios from 'axios'


// function Index({ isOpen, dataFeed, onRequestClose, title }) {

//   const [modalIsOpen, setIsOpen] = useState(isOpen);


//   function closeModal() {
//     setIsOpen(false)
//   }

//   async function handleDeleteFeed() {

//     const feedData = {
//       "id_material": dataFeed.id_material
//     }

//     try {
//       await axios.delete(`http://localhost:8080/material/${dataFeed.id_material}`);
//       window.location.reload(true);
//     } catch (err) {
//       alert(`nao foi possivel deletar \n Erro: ${err}`)
//     }

//   }

//   return (
//     <>
//       <div>
//         <Modal
//           show={isOpen}
//           backdrop="static"
//         >
//           <div className="color-dele">
//             <Modal.Header>
//               <Modal.Title>Tem certeza que deseja excluir o material selecionado</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <div className="btn-modal-dele">
//                 <Button
//                   variant="primary"
//                   type="submit"
//                   name="action"
//                   onClick={() => { window.location.reload(true) }}
//                 >Cancelar</Button>

//                 <Button
//                   variant="danger"
//                   type="submit"
//                   name="action"
//                   onClick={() => { handleDeleteFeed() }}
//                 >Excluir</Button>
//               </div>
//             </Modal.Body>
//             <Modal.Footer>

//             </Modal.Footer>
//           </div>
//         </Modal>
//       </div>
//     </>
//   )
// }

// export default Index


import React, { useState } from "react";
import Modal from 'react-modal';
import '../../StyleComponents/modalDelemat.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';




function Index({ isOpen, dataGender }) {

  const [modalIsOpen, setIsOpen] = useState(isOpen);


  function closeModal() {
    setIsOpen(false)
  }

  async function handleDeleteGender() {


    const genderData = {
      "id_genero": dataGender.id_genero,
    }

    try {
      await axios.delete(`http://localhost:8080/gender/${dataGender.id_genero}`);
      window.location.reload(true);
    } catch (err) {
      alert(`nao foi possivel deletar \n Erro: ${err}`)
    }

  }

  return (
    <>
      <div >
        <Modal
          data-backdrop='static'
          isOpen={modalIsOpen}
          className="color-dele"
        >
          <h2>Confirmação</h2>
          <div className="tem-certeza">
            <p>Tem certeza que deseja excluir o material selecionado?</p>
            <div className="btn-modal-dele">
              <Button className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={() => { window.location.reload(true) }}
              >Cancelar</Button>

              <Button className="btn waves-effect waves-light"
                variant="danger"
                type="submit"
                name="action"
                onClick={() => { handleDeleteGender() }}
              >Excluir</Button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Index