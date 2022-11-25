import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/store";
import { UserService } from "../service/user.service";

export default function VeiacosTable() {
  const { store } = useContext(AppContext);
  const [veiacosList, setVeiacosList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const { user } = store;

      const _userService = new UserService();

      const veiacosListResponse = await _userService.getUserVeiacos(user.id);

      setVeiacosList(veiacosListResponse.veiaco);
    }

    init();
  }, [store]);

  return (
    <div>
      <div>
        <h2>Veiacos mais recentes!</h2>
      </div>
      <table className="veiacos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {veiacosList.map((veiaco, index) => (
            <tr
              key={index}
              onClick={() => {
                navigate(`/veiaco/${veiaco.id}`);
              }}
            >
              <td>
                <span className="veiaco-picture" />
                {veiaco.name}
              </td>
              <td>{veiaco.phone}</td>
              <td>{new Date(veiaco.created_at).toLocaleDateString("pt-BR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Mostrando numero de {veiacosList.length}
        Ver todos os veiacos
      </div>
    </div>
  );
}
