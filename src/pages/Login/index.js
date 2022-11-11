import { useState } from "react";
import { api } from "../../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(value) {
    const item = {
      email: email,
      password: password,
    };

    await api.post("/users/auth", item);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="E-mail"
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(ev) => {
            setPassword(ev.target.value);
          }}
        />

        {JSON.stringify(email)}
        {JSON.stringify(password)}
        <button
          onClick={() => {
            handleRegister();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
