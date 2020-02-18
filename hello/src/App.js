import React from 'react';
import './App.css';
// import ReactDOM from "react-dom";
import Header from './basics/Header';
import Footer from './basics/Footer';
import Home from './basics/Home';

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