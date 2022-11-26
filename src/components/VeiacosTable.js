import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/store";
import { UserService } from "../service/user.service";

export default function VeiacosTable({ quantidadeVeiacos }) {
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
      <div className="veiacos-table-header">
        <div>
          <h2 className="table-headline">Veiacos recentes</h2>
        </div>
        <div></div>
      </div>

      <table className="veiacos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {veiacosList.map(
            (veiaco, index) =>
              index < quantidadeVeiacos && (
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
                  <td>
                    {new Date(veiaco.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td>
                    <label>Status</label>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <div>
        Mostrando 4 de {veiacosList.length}
        <br></br>
        Ver todos os veiacos
      </div>
    </div>
  );
}
