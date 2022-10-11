import {CSSTransition, TransitionGroup} from "react-transition-group";

import {Route, Routes, useLocation} from "react-router-dom";

import Main     from "components/Main/MainComponent";
import Contact  from "components/Contact/Contact";
import Tickets  from "components/Tickets/Tickets";

import React from "react";


export default function () {

    let location = useLocation();

    return (
            <div className="page">
                <div className='page-content'>
                    <TransitionGroup>
                        <CSSTransition
                            timeout={ {
                                enter: 1000,
                                appear: 1000,
                                exit: 0
                            }}
                            classNames='page'
                            key={location.pathname}

                            >

                            <Routes>
                                <Route path="/" element={<Main/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path="/tickets" element={<Tickets/>}/>
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        )
}