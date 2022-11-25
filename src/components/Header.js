import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
      <div>
        <img src={logoSmall} alt="Logo principal do APP" />
      </div>
      <nav className="nav">
        <ul>
          <NavLink
            to="home"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            <li>Dashboard</li>
          </NavLink>
          <NavLink
            to="veiacos"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            <li>Veiacos</li>
          </NavLink>
        </ul>
      </nav>
      <div className="user-info">
        <div>
          <label className="username">{store.user.user.name}</label>
        </div>
        <div className="box-user-image" />
      </div>
    </div>
  );
}
