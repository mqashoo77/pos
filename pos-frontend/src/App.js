import React from "react";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";

// CSS
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
                <Route exact path="/*" element={<Home/>} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
