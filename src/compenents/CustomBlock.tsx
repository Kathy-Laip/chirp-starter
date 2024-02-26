import React from "react";
import { ICustom } from "../interfaces";

type CustomBlockT ={
    custom: ICustom
}

export const CustomBlock: React.FC<CustomBlockT> = ({custom}) => {
    return(
        <div className="blockCustom">
            <img src={custom.img}/>
            
        </div>
    )
}