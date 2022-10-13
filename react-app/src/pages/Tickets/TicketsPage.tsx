import './TicketsPage.css'



export default function (){


    return(<div className={'page-content'}>
        <h1 className='gradient-text'>
            Tickets
        </h1>

        <p>Here will be some tickets!</p>

        <div className="card-container">
            <div className='card'>
                <img
                    alt='nice man'
                    className='card-image'
                    src='/img/photos/48502301-view-of-a-young-attractive-man-working-in-a-call-center.jpg'/>
                Card A
            </div>
            <div className='card'>
                Card B
            </div>
            <div className='card'>
                Card C
            </div>
        </div>

    </div>)
}