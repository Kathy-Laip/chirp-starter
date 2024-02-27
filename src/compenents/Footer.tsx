import React from "react";
import twitBlack from '../Assets/Twitter\ (Black).svg'

export const Footer: React.FC = () => {
    return(
        <footer className="cyan lighten-5">
            <div className="footer pdMain">
                <div className="logo"><span className="blue-text">Chirp</span></div>
                <div className="navLink">
                    <span><img src={twitBlack}/></span>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </div>
            </div>
        </footer>
    )
}