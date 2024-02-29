import React from "react";
import twitter from '../Assets/Twitter.svg'
import hamMenu from '../Assets/Hamburger\ Menu.svg'

export const Header = () => {
    function toggle():void {
        const menu = document.getElementById('hamMenuBlock') as HTMLFormElement
        if(menu.style.display === 'flex'){
            menu.style.display = 'none'
        } else menu.style.display = 'flex'
    }

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
            <div className="hamMenu">
                <img src={hamMenu} onClick={toggle}/>
                <div id="hamMenuBlock">
                    <span>Home</span>
                    <span>Pricing</span>
                    <span>FAQ</span>
            </div>
            </div>
        </div>
    )
}