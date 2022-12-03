import {Route, Routes} from "react-router-dom";
import Main from "pages/Main/MainPage";
import Contact from "pages/Contact/ContactPage";
import Info from "pages/Info/InfoPage";

import React from "react";
import Footer from "components/Footer/Footer";
import Page from "./Page";


export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/"         element={<Page key="1"><Main/>      </Page> }/>
                <Route path="/contact"  element={<Page key="2"><Contact/>   </Page>}/>
                <Route path="/info"     element={<Page key="3"><Info/>      </Page>}/>

                <Route path="/tickets/normal"   element={<Main/>}/>
                <Route path="/tickets/super"    element={<Main/>}/>
                <Route path="/tickets/mega"     element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}