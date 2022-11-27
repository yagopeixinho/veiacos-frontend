import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/store";
import { UserService } from "../service/user.service";
import arrowRight from "../assets/images/icons/arrow-right.svg";

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
          <h2 className="table-headline">Atividades recentes</h2>
        </div>
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
      <div className="veiacos-table-footer">
        <label className="show-items">
          Mostrando 4 de {veiacosList.length}
        </label>
        <label>
          <div className="see-all-veiacos">
            Ver todos
            <img src={arrowRight} alt="Uma seta apontado para a direita" />
          </div>
        </label>
      </div>
    </div>
  );
}
