import "./App.css";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import HomeWork from "../src/pages/HomeWork";
import Annauncements from "../src/pages/Annauncements";
import Users from "../src/pages/Users";
import CourseMaterial from "./pages/CourseMaterial";
import DiscordPage from "./pages/DiscordPage";
import SubmitHw from "./pages/SubmitHw";
import AllHomeWorks from "./pages/AllHomeWorks";
import NotFound from "./pages/NotFound";
import Logout from "./comp/Logout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeWork />} />
        <Route path="/hw/:id" element={<SubmitHw />} />
        <Route path="/allhomeworks/:id" element={<AllHomeWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homework" element={<HomeWork />} />
        <Route path="/annaun" element={<Annauncements />} />
        <Route path="/content" element={<CourseMaterial />} />
        <Route path="/users" element={<Users />} />
        <Route path="/discord" element={<DiscordPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
