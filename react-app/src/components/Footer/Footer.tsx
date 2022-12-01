import './Footer.css'
import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function (){
    const [date, ] = useState(new Date())

    return (<div className={'footer'}>
        <div>
            CHANGE IT PLEASEEEE
        </div>
        <div>
            <NavLink
                to={('/contact')}>
                Contact
            </NavLink>
        </div>
        <div>
            <p>
                © {date.getFullYear()} Tomasz Banaś
            </p>
        </div>
    </div>)
}