import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOYVwKxbZKsVaN8aVcw5AcAEt469d9bsk",
  authDomain: "coder-gaillard-proyectoreact.firebaseapp.com",
  projectId: "coder-gaillard-proyectoreact",
  storageBucket: "coder-gaillard-proyectoreact.appspot.com",
  messagingSenderId: "592411068243",
  appId: "1:592411068243:web:ee44a3cbc025e31eedc3a6"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
