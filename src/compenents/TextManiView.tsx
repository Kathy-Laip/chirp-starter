import React from "react";
import twitter from '../Assets/Twitter.svg';
import us1 from '../Assets/userAvatar01.svg'
import us2 from '../Assets/userAvatar02.svg'
import us3 from '../Assets/userAvatar03.svg'
import us4 from '../Assets/userAvatar04.svg'
import us5 from '../Assets/userAvatar05.svg'
import us6 from '../Assets/userAvatar06.svg'
import us7 from '../Assets/userAvatar07.svg'
import us8 from '../Assets/userAvatar08.svg'
import us9 from '../Assets/userAvatar09.svg'
import imgGrafic from '../Assets/Hero\ Image\ (Desktop View).png'

export const TextMainView = () => {
    return (
        <div className="textMainBody pdMain">
            <div className="textMain">
                <h1>Twitter analytics taken to a whole new level.</h1>
                <span> Chrip is a of Twitter analytics that will help you better understand
                    your audience, which tweets they like, and most importantly, when
                    they are the most active on Twitter.
                </span>
                <div className="block">
                    <button className="blue" style={{display: 'block', margin: '1rem 0'}}>
                        <img src={twitter}/>
                        <span>Sign in with Twitter</span>
                    </button>
                    <span className="blue-text text-darken-2 spec" style={{display: 'inline'}}>Learn more</span>
                </div>
                <div className="pics">
                    <img src={us1}/>
                    <img src={us2} className='ml1' alt=""></img>
                    <img src={us3} className='ml1' alt=""></img>
                    <img src={us4} className='ml1' alt=""></img>
                    <img src={us5} className='ml1' alt=""></img>
                    <img src={us6} className='ml1' alt=""></img>
                    <img src={us7} className='ml1' alt=""></img>
                    <img src={us8} className='ml1' alt=""></img>
                    <img src={us9} className='ml1' alt=""></img>
                </div>
                <span>Join <div className="blue-text text-darken-2 spec">195</div> others who have
                analyzed their followers and scheduled <div className="blue-text text-darken-2 spec">1342</div> tweels!</span>
            </div>
            <div className="picMain">
                <img src={imgGrafic}/>
            </div>
        </div>
    )
}