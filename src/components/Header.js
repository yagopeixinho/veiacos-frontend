import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoSmall from "../assets/images/logos/logo-small.svg";
import { AppContext } from "../contexts/store";
import homeIconDark from "../assets/images/icons/home-icon-dark.svg";

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
          <NavLink to="home" className="nav-link">
            <li>
              <span>
                <img
                  src={homeIconDark}
                  alt="Uma casa simbolizando a página Home"
                />
              </span>
              Home
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="user-info">
        <div>
          <h3>{store.user.user.name}</h3>
        </div>
        <div className="box-user-image"></div>
      </div>
    </div>
  );
}
