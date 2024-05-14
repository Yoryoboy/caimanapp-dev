// src/pages/SignUpPage.js
import React from "react";

function SignUpPage() {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Regístrate</button>
      </form>
    </div>
  );
}

export default SignUpPage;
