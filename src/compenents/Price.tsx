import React from "react";
import twitter from '../Assets/Twitter.svg'

export const Price: React.FC = () => {
    return (
        <div className="priceBody pdMain">
            <div className="priceList">
                <h2>One simple price plan</h2>
                <span>Start growing ypur Twittr account by analyzing ypur follower`s patterns</span>
                <div className='priceCard orange lighten-5'>
                    <span>Monthly</span>
                    <h1>$9<span>/mo</span></h1>
                    <hr/>
                    <ul>
                        <li><span>Unlimited* scheduled tweets and threads.</span></li>
                        <li><span>Schedule up to 3 weeks in advance.</span></li>
                        <li><span>Real-time audience analytics tracking up to 5k followers.</span></li>
                    </ul>
                    <hr/>
                    <button className="blue">
                        <img src={twitter}/>
                        <span>Start Trial with Twitter</span>
                    </button>
                </div>
            </div>
        </div>
    )
}