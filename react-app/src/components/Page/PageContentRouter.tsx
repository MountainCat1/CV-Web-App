import {Route, Routes} from "react-router-dom";
import Main from "pages/Main/MainPage";
import Contact from "pages/Contact/ContactPage";
import Tickets from "pages/Tickets/TicketsPage";

import React from "react";
import NormalTicket from "../../pages/Tickets/NormalTicket/NormalTicket";


export default function () {
    return (
        <div className="page">
            <Routes>
                <Route path="/"         element={<Main/>}/>
                <Route path="/contact"  element={<Contact/>}/>
                <Route path="/tickets"  element={<Tickets/>}/>

                <Route path="/tickets/normal"   element={<NormalTicket/>}/>
                <Route path="/tickets/super"    element={<NormalTicket/>}/>
                <Route path="/tickets/mega"     element={<NormalTicket/>}/>
            </Routes>
        </div>
    )
}