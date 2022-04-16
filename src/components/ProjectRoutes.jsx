import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Error404 } from "../pages/Error404";
import { Dentist } from "../pages/Dentist";
import { Patient } from "../pages/Patient";
import { Shift } from "../pages/Shift";

export const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dentist" element={<Dentist />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/shift" element={<Shift />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};
