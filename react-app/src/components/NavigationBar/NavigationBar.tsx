import './NavigationBar.css'
import {useNavigate} from "react-router-dom";


export default function (){
    const navigate = useNavigate();


    return (<div className={'navigation-bar'}>
        <div className={'navbar-flex'}>

            <a className='navbar-button' onClick={() => navigate('/')}>
                Main page
            </a>
            <a className='navbar-button' onClick={() => navigate('/tickets')}>
                Tickets
            </a>
            <a className='navbar-button' onClick={() => navigate('/contact')}>
                Contact
            </a>

        </div>
    </div>)
}