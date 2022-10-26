import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import PrivateRouter from "../src/router/PrivateRouter";
import AppRouter from "../src/router/AppRouter";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <Routes>
      <Route path="*" element={<PrivateRouter login={login} />}>
        <Route path="/*" element={<AppRouter />} />
      </Route>
      <Route path="/login" element={<Login setLogin={setLogin} />} />
    </Routes>
  );
}

export default App;
