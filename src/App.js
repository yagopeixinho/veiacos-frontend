import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Store from "./contexts/store";

import "./App.css";

function App() {
  return (
    <Store>
      <Router>
        <AppRoutes />
      </Router>
    </Store>
  );
}

export default App;
