import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/store";
import { UserService } from "../../service/user.service";
import trashIcon from "../../assets/images/icons/delete-icon.svg";
import pencilIcon from "../../assets/images/icons/edit-icon.svg";
import { useNavigate } from "react-router-dom";

export default function Veiacos() {
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
    <div className="veiacos-page">
      <div className="container-app">
        <table className="veiacos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
              <th>Data</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {veiacosList.map((veiaco, index) => (
              <tr key={index}>
                <td>
                  <span className="veiaco-picture" />
                  <span>{veiaco.name}</span>
                </td>
                <td>Devendo</td>
                <td>
                  {new Date(veiaco.created_at).toLocaleDateString("pt-BR")}
                </td>
                <td>{veiaco.phone}</td>
                <td>
                  <span>
                    <img
                      src={pencilIcon}
                      alt="Um ícone de lápis para editar um veiaco"
                      onClick={() => {
                        navigate(`/veiaco/${veiaco.id}`);
                      }}
                    />
                    <img src={trashIcon} alt="" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
