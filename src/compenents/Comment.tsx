import React from "react";
import { IComment } from "../interfaces";

type Comments = {
    comment: IComment
}

export const Comment: React.FC<Comments> = ({comment}) => {
    return (
        <div className="comment">
            <div className="picCom">
                {comment.emoji}</div>
            <h3>{comment.h3}</h3>
            <span>{comment.text}
            </span>
        </div>
    )
}