import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  // Check locations where the Header can apper
  if (pathname === "/entrar") {
    return;
  }

  return <div className="header"></div>;
}
