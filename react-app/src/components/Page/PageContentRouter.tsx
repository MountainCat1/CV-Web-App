import {Route, Routes} from "react-router-dom";
import React from "react";

import Footer from "components/Footer/Footer";
import Page from "./Page";

import Main         from "pages/Main/MainPage";
import Contact      from "pages/Contact/ContactPage";
import Info         from "pages/Info/InfoPage";
import AboutMe      from "pages/AboutMe/AboutMe";
import Experience   from "pages/Experience/Experience";
import Skills from "../../pages/Skills/Skills";







export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/"         element={<Page key="1"><Main/>      </Page> }/>
                <Route path="/contact"  element={<Page key="2"><Contact/>   </Page>}/>
                <Route path="/info"     element={<Page key="3"><Info/>      </Page>}/>

                <Route path="/about-me"     element={<Page key="4">     <AboutMe/>      </Page>}/>
                <Route path="/experience"   element={<Page key="5">     <Experience/>   </Page>}/>
                <Route path="/skills"       element={<Page key="6">     <Skills/>       </Page>}/>
            </Routes>
            <Footer/>
        </div>
    )
}