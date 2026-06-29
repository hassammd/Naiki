import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Namaz from "./Pages/Namaz";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        {/* 🔐 Protected Route: for only logged in user */}

        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/namaz"
            element={
              <ProtectedRoute>
                <Namaz />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* public route */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
