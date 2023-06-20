import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";
import App from "./App.jsx";
import "./index.css";
// import { jsxDEV } from "react/jsx-dev-runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CookiesProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
        
      </BrowserRouter>
    </ChakraProvider>
  </CookiesProvider>
);
