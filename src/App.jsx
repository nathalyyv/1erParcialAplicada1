import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Visitante from "./pages/Visitante";
import NuevoVisitante from "./pages/NuevoVisitante";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/Visitante"
              element={<Visitante />}
            />

            <Route
              path="/NuevoVisitante"
              element={<NuevoVisitante />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;