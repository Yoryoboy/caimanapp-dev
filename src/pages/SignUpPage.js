// src/pages/SignUpPage.js
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useReducer } from "react";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigation = useNavigate();

  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    emailError: null,
    passwordError: null,
    phoneError: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "name":
        return { ...state, name: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "phone":
        return { ...state, phone: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "emailError":
        return { ...state, emailError: action.payload };
      case "phoneError":
        return { ...state, phoneError: action.payload };
      case "passwordError":
        return { ...state, passwordError: action.payload };
      default:
        return state;
    }
  }

  const [
    { name, email, phone, password, emailError, passwordError, phoneError },
    dispatch,
  ] = useReducer(reducer, initialState);

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^\d+$/;
    return re.test(phone);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    dispatch({ type: "email", payload: value });
    if (value === "") {
      dispatch({ type: "emailError", payload: null });
    } else if (!validateEmail(value)) {
      dispatch({ type: "emailError", payload: "Formato de email inválido" });
    } else {
      dispatch({ type: "emailError", payload: null });
    }
  }

  function handlePhoneChange(e) {
    const value = e.target.value;
    dispatch({ type: "phone", payload: value });
    if (value === "") {
      dispatch({ type: "phoneError", payload: null });
    } else if (!validatePhone(value)) {
      dispatch({
        type: "phoneError",
        payload: "El teléfono debe constar de solo números",
      });
    } else {
      dispatch({ type: "phoneError", payload: null });
    }
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    dispatch({ type: "password", payload: value });
    if (value === "") {
      dispatch({ type: "passwordError", payload: null });
    } else if (value.length < 8) {
      dispatch({
        type: "passwordError",
        payload: "La contraseña debe tener al menos 8 caracteres",
      });
    } else {
      dispatch({ type: "passwordError", payload: null });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, phone, password);

    navigation("/verification");
  }

  function isFormValid() {
    return (
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      password !== "" &&
      !emailError &&
      !phoneError &&
      !passwordError
    );
  }

  return (
    <>
      <div className="signup-container">
        <h1>Registro</h1>
        <form>
          <Input
            type="text"
            label="name"
            value={name}
            icon="fi fi-rs-user"
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          >
            Nombre y apellido
          </Input>
          <Input
            type="text"
            label="email"
            value={email}
            icon="fi fi-rs-envelope"
            onChange={handleEmailChange}
            error={emailError}
          >
            Correo electrónico
          </Input>
          <Input
            type="tel"
            label="email"
            value={phone}
            icon="fi fi-rs-smartphone"
            onChange={handlePhoneChange}
            error={phoneError}
          >
            Número de teléfono
          </Input>
          <Input
            type="password"
            label="password"
            value={password}
            icon="fi fi-rs-lock"
            onChange={handlePasswordChange}
            error={passwordError}
          >
            Contraseña
          </Input>
          <p className="info">
            Al registrarse, acepta nuestros Términos y condiciones y nuestra
            <a href="/privacy"> Política de privacidad.*</a>
          </p>
          <Button
            backgroundColor="#8754A5"
            color="#FAFAFA"
            onClick={handleSubmit}
            disabled={!isFormValid()}
          >
            Crear cuenta
          </Button>
        </form>
      </div>
      <footer>
        <p>¿Ya tienes cuenta?</p>
        <a href="/login">Iniciar sesión</a>
      </footer>
    </>
  );
}

export default SignUpPage;
