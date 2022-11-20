import { useContext } from "react";
import { AppContext } from "../../contexts/store";

export default function Home() {
  const { store } = useContext(AppContext);

  return <h1></h1>;
}
