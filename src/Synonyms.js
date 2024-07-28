import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
if (props.synonyms){
    return (
        
        <div className="Synonyms">
        
            {props.synonyms.map(function (synonym, index){
                return <span key={index}> 
                 <li>{synonym}</li>
                 </span>;
            })}
    
        <br/>
        </div>
    );

}else {
    return null;
}
}