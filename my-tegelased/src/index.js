import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
       //Loogelised sulud, et võtta ainult üks osa BrowserRouterist, mitte kõike 
       //kust imporditakse 
import { BrowserRouter } from 'react-router-dom';


// BrowserRouter Võimaldab URLi muuta ehk localhost:3000/midagi-muud
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);