import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

import 'styles/globals.css'
import Main from "components/Main/MainComponent";

function App() {
  return (
    <div className="App">
        <NavigationBar/>

        <Router>
            <div className="page">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
