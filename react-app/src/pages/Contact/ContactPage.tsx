import './ContactPage.css'
import Reveal from "components/Reveal/Reveal";


export default function () {


    return (<>
        <h1 className='gradient-text'>
            Contact
        </h1>

        <p>
            You can use any form of communication that you prefer!
        </p>

        <div className='gradient-border'>
            <div className="gradient-border-content">
                <div className='contact-info-container'>
                    <div className='contact-info'>
                        <img className={'contact-image'} src='/img/icon/mail.png' alt={'Email icon'}/>
                        <p>someEmail@gmail.com</p>
                    </div>
                    <div className='contact-info'>
                        <img className={'contact-image'} src='/img/icon/telephone.png' alt={'Phone icon'}/>
                        <p>48+ 660 660 660</p>
                    </div>
                    <div className='contact-info'>
                        <img className={'contact-image'} src='/img/icon/discord.png' alt={'Discord icon'}/>
                        <p>YourMom#2137</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}