import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';


const routing = (

<Router>

  <Link to="/">Home</Link>
  <Link to="/Emps">Employees</Link>
  <Link to="/Depts">Department</Link>

  <Routes>
    <Route path="/" element={ <App/>} />
    <Route path="/Emps" element={ <Emps/>} />
    <Route path="/Depts" element={ <Depts/>} />
  </Routes>

</Router>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
