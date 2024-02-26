import React, {useState} from "react";
import { Comment } from "./Comment";
import { IComment } from "../interfaces";

export const Features:React.FC = () => {
    const [com, setCom] = useState<IComment[]>([
        {emoji:"📈",
        h3: "Analytics",
        text: 'We constantly monitor ypur audience as it grows - so you can Tweet when ypur followers are mosr likely to be online and readt to engage with ypur content.' 
        },
        {emoji:"🤓",
        h3: "Smart Analyzer",
        text: 'Chirp automatically recognizes your followers` most active times and automatically sends you notificatios if you`re missing out an opportunity.' 
        },{emoji:"🗞️",
        h3: "Schedule Your Tweets",
        text: 'Quality tweets drive tons of engagenent With Chiro, you can write tweets in an advance and schedule them when your audience is most likely to read.' 
        },{emoji:"🌑",
        h3: "Dark Mode",
        text: 'Friendly on the eyes, no matter what time you write your Tweets, All colors are chosen to make sure ypur eyes are at ease ar all times.' 
        },])
    return (
        <div className="blockFeatures pdMain">
            <h2>Features that help you
            <br/>Tweet smarter.</h2>
            <div className="blockComment">
                {com.map(el => {
                    return(
                        <Comment comment={el}/>
                    )
                })}
            </div>
        </div>
    )
}