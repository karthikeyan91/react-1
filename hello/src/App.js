import React from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom'
// import ReactDOM from "react-dom";
import Header from './basics/Header';
import Footer from './basics/Footer';
import Home from './basics/Home';
import Contact from "./basics/Contact";

function App() {
    return (
        <HashRouter>
            <div className="main" >
                <Header />
                <div className="content p-4 full-height">
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;