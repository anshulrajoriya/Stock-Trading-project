

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboards from "./components/Dashboards";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/dashboard" element={<Dashboards />} />
    </Routes>
  );
}

export default App;
