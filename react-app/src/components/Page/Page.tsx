import {useEffect} from "react";
import {useLocation} from "react-router-dom";


interface PageProps {
    children : any
}

export default function (props : PageProps){

    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, [location])


    return (<div className={'page-content'}>
        {props.children}
    </div>)
}