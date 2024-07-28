import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props){
    console.log(props.meaning);

    return (
        
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
            <hr/>
            <div className="Definition">
                <p>{props.meaning.definition}</p>
            </div>
            <div className="Example">
                <Example example={props.meaning.example}/>
            </div>
           
                <Synonyms synonyms={props.meaning.synonyms}/> 
             
</div>
);
}