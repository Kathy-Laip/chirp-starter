import React, {useState} from "react";
import { ICustom } from "../interfaces";
import { CustomBlock } from "./CustomBlock";
import us9 from '../Assets/userAvatar09.svg'
import us3 from '../Assets/userAvatar03.svg'
import us4 from '../Assets/userAvatar04.svg'

export const Customers = () => {
    const [customers, setCustomers] = useState<ICustom[]>([
        {name: 'Sara May',
        nick: '@sara_may',
        text:'I just tried out @chirp and it`s amazing, love all the analytics I cam see.',
        count:2,
        img:us9},
        {name: 'Jack Scott',
        nick: '@jackscott_',
        text:'I initially started using Chirp to support the coufounder as I personally knew him, but after having tried oy out for a few weeks, I can genuinely say this changed my Twitter game.',
        count:32,
        img:us4},
        {name: 'Jessica May',
        nick: '@jmay98',
        text:'Absolutely love everything about Chirp, from the design to how eeverything works smoothly.',
        count:221,
        img:us3},
    ])
    return (
        <div className="mainСustomers cyan lighten-5">
            <div className="bodyCustom pdMain">
                <h2>What out sutomers say</h2>
                <div className="blocksCustom">
                    {customers.map(el => {
                        return(
                            <CustomBlock custom={el}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}