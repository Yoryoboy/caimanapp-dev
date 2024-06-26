import React from "react";
import { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

import styles from "./LoginPage.module.css";

function LoginPage() {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    navigation("/dashboard");
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <h1>Inicio de sesión</h1>
        <form>
          <Input
            type="text"
            label="email"
            value={email}
            icon="fi fi-rs-envelope"
            onChange={handleUsernameChange}
          >
            Correo electrónico
          </Input>
          <Input
            type="password"
            label="password"
            value={password}
            icon="fi fi-rs-lock"
            onChange={handlePasswordChange}
          >
            Contraseña
          </Input>
          <div>
            <div>
              <input type="checkbox" />
              <p>Recordar mis datos</p>
            </div>
            <a href="/">¿Olvidó contraseña?</a>
          </div>
          <Button
            backgroundColor="#8754A5"
            color="#FAFAFA"
            onClick={handleSubmit}
            width="100%"
          >
            Iniciar sesión
          </Button>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>¿No tienes cuenta?</p>
        <Link to="/signup">Regístrate</Link>
      </footer>
    </>
  );
}

export default LoginPage;
