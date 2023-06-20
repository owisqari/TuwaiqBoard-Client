import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Users from "./pages/Users";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
