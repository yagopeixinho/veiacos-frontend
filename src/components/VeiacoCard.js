import userEditIcon from "../assets/images/icons/user-edit.svg";
import userSeeIcon from "../assets/images/icons/see-user.svg";
import deleteIcon from "../assets/images/icons/delete-icon.svg";
import { useNavigate } from "react-router-dom";

export default function VeiacoCard({ veiaco, setConfirmationDialog }) {
  const navigate = useNavigate();

  return (
    <div className="veiaco-card">
      <div className="veiaco-card-container">
        <div className="veiaco-picture" />
        <div className="veiaco-info">
          <h1>{veiaco.name}</h1>
          <label>{veiaco.phone}</label>
        </div>
      </div>
      <hr />
      <div className="veiaco-actions">
        <div>
          <img
            src={userSeeIcon}
            alt="Ícone de visualizar o veiaco. A imagem consiste na silhueta que representa um veiaco."
            onClick={() => {
              navigate(`/veiaco/${veiaco.id}/dashboard`);
            }}
          />
        </div>
        <div>
          <img
            src={userEditIcon}
            alt="Ícone de editar um veiaco. A imagem consiste na figura de um veiaco com um lápis que simboliza a edição."
            onClick={() => {
              navigate(`/veiaco/${veiaco.id}`);
            }}
          />
        </div>
        <div>
          <img
            src={deleteIcon}
            alt="Ícone de deletar um veiaco. A imagem consiste na figura de uma lixeira."
            onClick={() => {
              setConfirmationDialog(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
