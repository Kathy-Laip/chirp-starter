import React from "react";
import { Header } from "./Header";
import { TextMainView } from "./TextManiView";

export const MainView = () =>{
    return(
        <div className="mainView">
            <Header/>
            <TextMainView/>
        </div>
    )
}