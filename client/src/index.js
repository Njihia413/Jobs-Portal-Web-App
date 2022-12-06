import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route }  from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateJobForm from './components/CreateJobForm';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/login' element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-a-job" element={<CreateJobForm/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
