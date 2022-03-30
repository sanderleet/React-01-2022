import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './i18n.js';
import 'leaflet/dist/leaflet.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './store/authContext';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


