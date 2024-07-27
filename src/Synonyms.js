import React from "react";

export default function Synonyms(props){
if (props.synonyms){
    return (
        
        <div className="Synonyms">
            <br/>
          <h6>Synonym:</h6>  
        <ul>
            {props.synonyms.map(function (synonym, index){
                return <span key={index}> 
                 <li>{synonym}</li>
                 </span>;
            })}
        </ul>
        <br/>
        </div>
    );

}else {
    return null;
}
}