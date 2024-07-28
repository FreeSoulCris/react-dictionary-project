import React from "react";

export default function Example(props){
    if (props.example){
        return (
            <div className="Examples">
            <em className="Example">
                {props.example}           
            </em>
            <br/>
            </div>
        );
    
    }else {
        return null;
    }
    }