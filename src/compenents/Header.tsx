import React from "react";
import twitter from '../Assets/Twitter.svg'

export const Header = () => {
    return (
        <div className="header pdMain">
            <div className="logo"><span className="blue-text">Chirp</span></div>
            <div className="navLink">
                <span>Home</span>
                <span>Pricing</span>
                <span>FAQ</span>
                <button className="blue">
                    <img src={twitter}/>
                    <span>Sign in with Twitter</span>
                </button>
            </div>
        </div>
    )
}