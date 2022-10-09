import './NavigationBar.css'


export default function (){

    return (<div className={'navigation-bar'}>
        <div className={'navbar-flex'}>

            <a className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Main page
            </a>
            <a className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Tickets
            </a>
            <a className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Contact
            </a>

        </div>
    </div>)
}