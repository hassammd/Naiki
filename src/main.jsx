import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyContextProvider } from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
);
