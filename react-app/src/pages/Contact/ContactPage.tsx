import './ContactPage.css'

export default function (){


    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Contact
        </h1>

        <p>This is contact!</p>

        <div className={'gradient-border'}>
            <div className="gradient-border-content">
                <div className='contact-info-container'>
                    <div className='contact-info'>
                        <p>Email:</p>
                        <p>someEmail@gmail.com</p>
                    </div>
                    <div className='contact-info'>
                        <p>Phone:</p>
                        <p>48+ 660 660 660</p>
                    </div>
                    <div className='contact-info'>
                        <p>Discord:</p>
                        <p>YourMom#2137</p>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}