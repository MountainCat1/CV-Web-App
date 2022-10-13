import React from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

import 'styles/globals.css'
import 'styles/page.css'

import Page from "../Page/PageContentRouter";

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationBar/>
                <Page/>
            </Router>
        </div>
    );
}

export default App;
