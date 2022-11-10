import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  console.log(authenticated);

  return (
    <div>
      <h1>Você está na página de Login</h1>
      <button type="button" onClick={handleLogin}>
        Entrar
      </button>
    </div>
  );
}
