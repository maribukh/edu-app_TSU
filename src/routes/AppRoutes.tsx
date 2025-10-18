import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Courses from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
