import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/store";
import { UserService } from "../../service/user.service";
import trashIcon from "../../assets/images/icons/delete-icon.svg";
import pencilIcon from "../../assets/images/icons/edit-icon.svg";
import { useNavigate } from "react-router-dom";
import VeiacoCard from "../../components/VeiacoCard";
import ConfirmationDialog from "../../components/modals/ConfirmationDialog";

export default function Veiacos() {
  const { store } = useContext(AppContext);
  const [veiacosList, setVeiacosList] = useState([]);
  const [confirmationDialog, setConfirmationDialog] = useState(false);

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
    <>
      <ConfirmationDialog
        visible={confirmationDialog}
        message="Deseja excluir esse veiaco"
        onConfirm={() => {}}
      />

      <div className="veiacos-page">
        <div className="container-app">
          <div className="grid-veiacos">
            {veiacosList.map((veiaco, index) => (
              <VeiacoCard
                veiaco={veiaco}
                key={index}
                setConfirmationDialog={setConfirmationDialog}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
