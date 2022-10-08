import './NavigationBar.css'


export default function (){

    return (<div className={'navigation-bar'}>
        <div className={'navbar-flex'}>

            <button className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Main page
            </button>
            <button className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Tickets
            </button>
            <button className='navbar-button' onClick={() => {
                console.log('click')
            }}>
                Contact
            </button>

        </div>
    </div>)
}