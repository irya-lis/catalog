import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css'
import Home from "./components/screens/home/Home";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

