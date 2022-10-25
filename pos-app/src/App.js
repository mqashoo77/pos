import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
///// CSS
import './App.css'
///// Pages 
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import PageNotFound from './pages/404Page';


//components

function App () {
    return (
    <BrowserRouter>
        <React.Fragment>
              <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/404" element={<PageNotFound />} />
              </Routes>
          </React.Fragment>
    </BrowserRouter>
    
    
    );
}
 
export default App