import './InfoPage.css'
import {NavLink} from "react-router-dom";



export default function (){
    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Info
        </h1>

        <p>All information about me divided into sub-categories.</p>

        <div className='gradient-border'>
            <div className="card-container gradient-border-content">
                <div className='card'>
                    <img className={'card-image'} src='/img/photos/ME_PC.jpg' alt={'me'}/>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            <div className={'card-title-content '}>
                                Skills
                            </div>
                        </h2>
                        <p className='card-body'>
                            List of all my skills -- what i can and can't do!
                        </p>
                        <NavLink className='card-link' to='/tickets/normal'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
                <div className='card'>
                    <img className={'card-image'} src='/img/photos/ME-STUPID.jpg'  alt={'me'}/>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            <div className={'card-title-content '}>
                                Experience and Education
                            </div>
                        </h2>
                        <p className='card-body'>
                            Information about my education and experience in the profession
                        </p>
                        <NavLink className='card-link' to='/tickets/normal'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
                <div className='card'>
                    <img className={'card-image'} src='/img/photos/ME_NICE.jpg'  alt={'me'}/>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            <div className={'card-title-content '}>
                                About me
                            </div>
                        </h2>
                        <p className='card-body'>
                            General stuff about me as a person.
                        </p>
                        <NavLink className='card-link' to='/tickets/normal'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

        <p>If there is anything missing do not hesitate to hit me up in any way!</p>

    </div>)
}