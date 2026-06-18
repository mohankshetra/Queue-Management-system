import {
  Routes,
  Route
} from "react-router-dom";
import ProtectedRoute
from "./components/ProtectedRoute";
import AdminDashboard
from "./pages/AdminDashboard";
import Analytics
from "./pages/Analytics";

import Reports
from "./pages/Reports";
import StaffDashboard
from "./pages/StaffDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";

function App() {

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/staff"
        element={
         <ProtectedRoute>
           <StaffDashboard />
         </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

    </Routes>
  );

}

export default App;