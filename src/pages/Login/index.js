import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Imagem from "../../components/Imagens/transparente.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api.js";
import "../../styles/login.css";

function Index() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  // um objeto para ter acesso as todas funcionalidades do useNavigate
  let navigate = useNavigate();

  async function handleLogin(e) {
    // evitar um re-carregamento da página ao enviar os dados, só atualiza se os dados estiverem certo.
    e.preventDefault();

    console.log(userName, password);

    try {
      const dataLogin = {
        "nome" : userName,
        "senha" : password,
      };
      
      const { data } = await api.post("/login", dataLogin);
      console.log("Results >>> " + JSON.stringify(data))


      // armazena os dados do usuário no navegador para não precisar logar novamente
      sessionStorage.setItem("login", true);
      // Criando a criptografia
      sessionStorage.setItem("jwt", data.token);
      localStorage.setItem('_user_logado', JSON.stringify(dataLogin.nome)) //stringify transforma objeto em string
      // para qual página o usuário será redirecionado
      navigate("/");
    } catch (err) {
      alert("erro na requisição" + err);
    }
  }

  return (
    <>
      <div className="login-cont">
        <img className="Login-Logo" src={Imagem} />
        <Form>
          <div className="form-text">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
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
