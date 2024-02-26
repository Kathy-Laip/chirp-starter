import React, {useState} from "react";
import { ICustom } from "../interfaces";
import { CustomBlock } from "./CustomBlock";
import us9 from '../Assets/userAvatar09.svg'

export const Customers = () => {
    const [customers, setCustomers] = useState<ICustom[]>([
     {name: 'Sara May',
        nick: '@sara_may',
        text:'I just tried out @chirp and it`s amazing, love all the analytics I cam see.',
        count:2,
        img:us9},
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