import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        {/* 🔐 Protected Route: for only logged in user */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* public route */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
