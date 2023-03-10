import React from 'react';
import ReactDOM from 'react-dom/client';

//Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// ! Nuestros estilos deben ir siempre debajo de bootstrap para que no los pise.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouting1 from './AppRouting1';

const root = ReactDOM.createRoot(document.getElementById('root')); // root -> es el id que tenemos en el HTML, entonces le decimos que renderice la App en ese id.
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouting1></AppRouting1>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
