import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export function Store() {
  const View1 = () => {};

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/add" element={<View1 />} />
          {/* <Route path="/view" element={<View2 />} />
          <Route path="/update" element={<View3 />} />
          <Route path="/delete" element={<View4 />} />
          <Route path="/StudentInfo" element={<View5 />} />
          <Route path="/" element={<View1 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Store;
