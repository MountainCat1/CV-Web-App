import './ContactPage.css'
import Reveal from "components/Reveal/Reveal";


export default function () {


    return (<>
        <h1 className='gradient-text'>
            Contact
        </h1>

        <div className='gradient-border'>
            <div className='gradient-border-content'>
                <Reveal offset={0} effect='revealed' className={'about-me-container'}>
                    <h1>This is me!</h1>
                    <div className="about-me">
                        <img className='page-img about-me-image'
                             src='/img/photos/ME.jpg'
                             alt={'young-attractive-man-working-in-a-call-center'}/>

                        <Reveal offset={0} effect='revealed'>
                            <p className='about-me-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                            <></>
                        </Reveal>
                    </div>
                </Reveal>
            </div>
        </div>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
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