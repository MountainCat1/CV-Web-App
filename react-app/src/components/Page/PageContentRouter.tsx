import {Route, Routes} from "react-router-dom";
import Main from "pages/Main/MainPage";
import Contact from "pages/Contact/ContactPage";
import Info from "pages/Info/InfoPage";

import React from "react";
import Footer from "components/Footer/Footer";


export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/"         element={<Main/>}/>
                <Route path="/contact"  element={<Contact/>}/>
                <Route path="/info"     element={<Info/>}/>

                <Route path="/tickets/normal"   element={<Main/>}/>
                <Route path="/tickets/super"    element={<Main/>}/>
                <Route path="/tickets/mega"     element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}