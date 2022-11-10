import { useContext, useEffect, useState } from "react";
import api from "../../api";
import { Context } from "../../Context/AuthContext";

export default function User() {
  const { handleLogout } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function init() {
      const { data } = await api.get("/users");

      debugger;
      setUsers(data);
    }

    init();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
        <button onClick={handleLogout}>Sair</button>
      </ul>
    </div>
  );
}
