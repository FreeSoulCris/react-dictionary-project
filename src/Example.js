import React from "react";

export default function Example(props){
    if (props.example){
        return (
            <div className="Examples">
            <h6>Example: </h6>
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