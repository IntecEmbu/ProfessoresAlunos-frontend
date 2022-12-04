import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Imagem from "../../components/Imagens/transparente.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api.js";
import "../../styles/login.css";

function Index() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState(null);
  const [regNumber, setRegNumber] = useState(null);
  const [regClass, setRegClass] = useState(null);

  // um objeto para ter acesso as todas funcionalidades do useNavigate
  let navigate = useNavigate();

  async function handleLogin(e) {
    // evitar um re-carregamento da página ao enviar os dados, só atualiza se os dados estiverem certo.
    e.preventDefault();


    try {
      const dataLogin = {
        "user_name":userName,
        "senha": password,
        "registro_numero": regNumber,
        "registro_classe": regClass,
      };

      const { data } = await api.post("/login", dataLogin);
      console.log("Results >>> " + JSON.stringify(data))


      // armazena os dados do usuário no navegador para não precisar logar novamente
      sessionStorage.setItem("login", true);
      // Criando a criptografia
      sessionStorage.setItem("jwt", data.token);
      sessionStorage.setItem('_user_logado', JSON.stringify(dataLogin.user_name)) //stringify transforma objeto em string
      // para qual página o usuário será redirecionado
      navigate("/");
    } catch (err) {
      if (err.response.status === 401) {
        alert('formulário vazio')
      } else {
        alert("erro na requisição" + err);
      }
    }
  }
  return (
    <>
      <div className="login-cont">
        <img className="Login-Logo" src={Imagem} />
        <Form>
          <div className="form-text">
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>
            <fieldset class=""
              value={regClass}
              onChange={e => setRegClass(e.target.value)}>
              <div class="" >
                <h6 class="">Tipo de conta:</h6>
                <div class="" className='cont-tipo'>
                  <div class="">
                    <label class="" for="gridRadios1">
                      Professor
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="RM" required></input>
                  </div>
                  <div class="">
                    <label class="" for="gridRadios2">
                      Aluno
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="RA" required></input>
                  </div>
                  <div class="">
                    <label class="" for="gridRadios2">
                      Convidado
                    </label>
                    <input class="" type="radio" name="gridRadios" id="" value="GT" required></input>
                  </div>
                </div>
              </div>
            </fieldset>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Número de registro:</Form.Label>
              <Form.Control
                type="text"
                value={regNumber}
                maxLength={5}
                onChange={e => setRegNumber(e.target.value)}
                required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Entrar
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Index;
