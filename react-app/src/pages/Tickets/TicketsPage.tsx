import './TicketsPage.css'



export default function (){


    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Tickets
        </h1>

        <p>Here will be some tickets!</p>

        {/*<div className='gradient-border'>*/}
            <div className="card-container gradient-border-content">
                <div className='card'>
                    <div>
                        <div className='card-content'>
                            <h2 className='card-title'>
                                Mega Tickets
                            </h2>
                            <p className='card-body'>
                                It's super mega cooool ticket. You want it! :D
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            Mega Tickets
                        </h2>
                        <p className='card-body'>
                            It's super mega cooool ticket. You want it! :D
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-content'>
                        <h2 className='card-title'>
                            Mega Tickets
                        </h2>
                        <p className='card-body'>
                            It's super mega cooool ticket. You want it! :D
                        </p>
                    </div>
                </div>
            {/*</div>*/}
        </div>


    </div>)
}