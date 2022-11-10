import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./App.css";
import Login from "./pages/Login";
import User from "./pages/Users";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthProvider value={{ authenticated: false }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
