import React from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom'
// import ReactDOM from "react-dom";
import Header from './basics/Header';
import Footer from './basics/Footer';
import Home from './basics/Home';
import Contact from "./basics/Contact";

function App() {
  return (
    <div className="main" >
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;