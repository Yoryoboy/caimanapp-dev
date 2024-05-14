// src/pages/LoginPage.js
import React from "react";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;
