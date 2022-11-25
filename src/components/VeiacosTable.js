import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/store";
import { UserService } from "../service/user.service";

export default function VeiacosTable() {
  const { store } = useContext(AppContext);
  const [veiacosList, setVeiacosList] = useState([]);

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
    <table>
      <tr>
        <th>Nome</th>
      </tr>
      {veiacosList.map((veiaco, index) => (
        <td key={index}>{veiaco.name}</td>
      ))}
    </table>
  );
}
