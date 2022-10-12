import {Route, Routes} from "react-router-dom";
import Main from "components/Main/MainComponent";
import Contact from "components/Contact/Contact";
import Tickets from "components/Tickets/Tickets";

import React from "react";


export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
            </Routes>
        </div>
    )
}