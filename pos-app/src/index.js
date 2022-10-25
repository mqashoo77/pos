import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';

//css files

import "./app.css"
import './popupComponants/category.css'
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

