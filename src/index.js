import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, HashRouter, Routes,
  Route,  } from "react-router-dom";
import './index.css';
import App from './App';
import Products from './Products'
import Metaweaver from './Metaweaver'
import Science from './Science'
import Team from './Team'
import NotFoundPage from './NotFoundPage'



import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter basename="/">
    <Routes>
    <Route path="" element={<App />} />
    <Route path="products" element={<Products />} />
    <Route path="science" element={<Science />} />
    <Route path="aboutus" element={<Team />} />
    <Route path="products/metaweaver" element={<Metaweaver />} />
    <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
