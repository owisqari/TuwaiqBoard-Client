import "./App.css";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import HomeWork from "../src/pages/HomeWork";
import Annauncements from "../src/pages/Annauncements";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeWork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homework" element={<HomeWork />} />
        <Route path="/annaun" element={<Annauncements />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
