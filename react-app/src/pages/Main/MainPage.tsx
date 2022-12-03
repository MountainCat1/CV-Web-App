import './MainPage.css'
import Reveal from "../../components/Reveal/Reveal";


export default function () {
    return (<>
        <h1>Tomasz Banaś</h1>
        <p>
            Welcome to my amazing website!
        </p>

        <p>
            This website about me!
        </p>

        <div className='gradient-border'>
            <div className='gradient-border-content'>
                <Reveal className="text-with-image" effect={'revealed'} offset={0}>
                    <img className='inline-image'
                         src='/img/photos/ME_PC.jpg'
                         alt={'young-attractive-man-working-in-a-call-center'}/>
                    <p>Me at my PC doing some coooding</p>
                </Reveal>
            </div>
        </div>

        <span className={'main-page-text'}>
            <div className={'grid-item-left'}>
                <Reveal effect={'revealed'} offset={100}>
                    <p className={'grid-item-text'}>
                        I am a passionate programmer who tries to develop towards Web Development, mainly Back-End, as well as
                        Game Dev. I am happy to learn about new solutions and technology to improve myself in the field of IT.
                    </p>
                </Reveal>
            </div>
            <div className={'grid-item-right'}>
                <Reveal effect={'revealed'} offset={100}>
                    <p className={'grid-item-text'}>
                        I have great enthusiasm for learning. I try as much as I can to make my skill set constantly expand.
                    </p>
                </Reveal>
            </div>
        </span>

        <div className='gradient-border'>
            <div className='gradient-border-content'>

                <Reveal className="text-with-image" effect={'revealed'} offset={50}>
                    <img className='inline-image'
                         src='/img/photos/DimWarper.png'
                         alt={'young-attractive-man-working-in-a-call-center'}/>
                    <p>My game Dimwarper available on Steam!</p>
                </Reveal>
            </div>
        </div>

        <span className={'main-page-text'}>
            <div className={'grid-item-left'}>
                <Reveal effect={'revealed'} offset={100}>
                    <p className={'grid-item-text'}>
                        I am studying and working in order to gain experience and practical skills. I have no problem
                        listening
                        and learning from the more experienced team members. I understand that there is still a long way to go,
                        on
                        the programmer's path.
                    </p>
                </Reveal>
            </div>
            <div className={'grid-item-right'}>
                <Reveal effect={'revealed'} offset={100}>
                    <p className={'grid-item-text'}>
                        As a member of the team, I am very cheerful, and I can introduce a looser and more pleasant atmosphere for
                        everyone.
                    </p>
                </Reveal>
            </div>
        </span>

        <div className='gradient-border'>
            <div className='gradient-border-content'>
                <Reveal className="text-with-image" effect={'revealed'} offset={50}>
                    <img className='inline-image'
                         src='/img/photos/ME-STUPID.jpg'
                         alt={'young-attractive-man-working-in-a-call-center'}/>
                    <p>Me at my college studying applied computer science!</p>
                </Reveal>
            </div>
        </div>

    </>)
}