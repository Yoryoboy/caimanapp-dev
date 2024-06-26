import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import "./VerificationPage.css";

function VerificationPage() {
  const navigation = useNavigate();

  return (
    <div className="verification-container">
      <svg
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M137.143 74.7754V80.0325C137.136 92.3549 133.146 104.345 125.768 114.214C118.39 124.084 108.019 131.304 96.2021 134.798C84.3853 138.291 71.7558 137.872 60.197 133.602C48.6382 129.331 38.7695 121.439 32.0627 111.101C25.3558 100.764 22.1703 88.5357 22.981 76.24C23.7918 63.9443 28.5555 52.2401 36.5616 42.8729C44.5678 33.5058 55.3874 26.9775 67.4068 24.2619C79.4263 21.5463 92.0016 22.7887 103.257 27.8039M137.143 34.3183L80 91.5183L62.8572 74.3754"
          stroke="#06C270"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2>Excelente!</h2>
      <p>
        Hemos enviado un código de confirmación de 6 dígitos a myname@mail.com.
        Asegúrese de ingresar el código correcto.
      </p>
      <Button
        backgroundColor="#8754A5"
        color="#FAFAFA"
        onClick={() => navigation("/login")}
      >
        Continuar
      </Button>
    </div>
  );
}

export default VerificationPage;
