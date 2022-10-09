import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

import 'styles/globals.css'
import 'styles/page.css'

import Main     from "components/Main/MainComponent";
import Contact  from "components/Contact/Contact";
import Tickets  from "components/Tickets/Tickets";

function App() {
    return (
        <div className="App">
            <Router>
                <NavigationBar/>
                <div className="page">
                    <div className='page-content'>
                        <Routes>
                            <Route path="/"         element={<Main/>}/>
                            <Route path="/contact"  element={<Contact/>}/>
                            <Route path="/tickets"  element={<Tickets/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
