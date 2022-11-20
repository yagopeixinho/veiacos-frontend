import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Store from "./contexts/store";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Store>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </Store>
  );
}

export default App;
