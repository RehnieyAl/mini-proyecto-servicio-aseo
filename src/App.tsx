import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import QuienesSomos from "./pages/QuienesSomos";
import Empleados from "./pages/Empleados";
import { ReservaProvider } from "./context/ReservaContext";
import { ClienteProvider } from "./context/clienteContext";
import { EmpleadoProvider } from "./context/empleadoContext";
import "./App.css";

function App() {
  return (
    <Router>
      <ReservaProvider>
        <ClienteProvider>
          <EmpleadoProvider>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/buscarEmpleado" element={<Empleados />} />
            </Routes>
          </EmpleadoProvider>
        </ClienteProvider>
      </ReservaProvider>
    </Router>
  );
}

export default App;