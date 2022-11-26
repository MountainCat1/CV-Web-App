import './InfoPage.css'
import {NavLink} from "react-router-dom";



export default function (){
    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Tickets
        </h1>

        <p>Here will be some tickets!</p>

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
                            It's super mega cooool ticket. You want it! :D
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
                            It's super mega cooool ticket. You want it! :D
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
                            It's super mega cooool ticket. You want it! :D
                        </p>
                        <NavLink className='card-link' to='/tickets/normal'>
                            Learn more
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}