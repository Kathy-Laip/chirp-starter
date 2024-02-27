import React from "react";
import { ICustom } from "../interfaces";
import twitBlue from '../Assets/Twitter\ (Blue).svg'
import heart from '../Assets/Like.svg'

type CustomBlockT ={
    custom: ICustom
}

export const CustomBlock: React.FC<CustomBlockT> = ({custom}) => {
    return(
        <div className="blockCustom">
            <div className="infoPerson">
                <div className="mainInfo">
                    <img src={custom.img}/>   
                    <div className="nameNick">
                        <h3>{custom.name}</h3>
                        <span>{custom.nick}</span>
                    </div>
                </div>
                <div className="birdBlock">
                    <img src={twitBlue}/>    
                </div>
            </div>
            <div className="blockCommentText">
                <span>{custom.text}</span>
            </div>
            <div className="dateComment">
                <div className="countHeart"><img src={heart}/><span style={{}}>{custom.count}</span></div>
                <div><span>March 2, 2021</span></div>
            </div>
        </div>
    )
}