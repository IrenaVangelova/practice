import Dashboard from "./pages/Dashboard";
import Order from "./pages/Orders";
import Customer from "./pages/Customers";
import Integration from "./pages/Integrations";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Report from "./pages/Reports";

function App() {
  return(
    <div className="App">
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/reports" element={<Report />} />
              <Route path="/customers" element={<Customer />} />
              <Route path="/integrations" element={<Integration />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
