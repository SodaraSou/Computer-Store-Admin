import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComputerStoreAdminProvider } from "./contexts/ComputerStoreAdminContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <ComputerStoreAdminProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ComputerStoreAdminProvider>
  );
}

export default App;
