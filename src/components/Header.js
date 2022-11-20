import { useContext } from "react";
import { useLocation } from "react-router-dom";
import logoSmall from "../assets/images/logos/logo-small.svg";
import { AppContext } from "../contexts/store";

export default function Header() {
  const { store } = useContext(AppContext);
  const { pathname } = useLocation();

  // Check locations where the Header can apper
  if (pathname === "/entrar") {
    return;
  }

  return (
    <div className="header">
      <div className="nav-header">
        <img src={logoSmall} alt="Logo do APP" />
        <ul>
          <li>Home</li>
        </ul>
      </div>

      <div className="user-info">
        <div className="box-user-image"></div>
        <div>
          <h3>{store.user.user.name}</h3>
        </div>
      </div>
    </div>
  );
}
