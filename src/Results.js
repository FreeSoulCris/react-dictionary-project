import React from "react";
import Meaning from "./Meaning";
import "./Results.css";


export default function Results(props){
    console.log(props.results);
if (props.results){
        return (
        <div className="Results">
            <br/>
            <section>   
                <h2>{props.results.word}</h2>
                <div className="Phonetics"><span>🔉<em>{props.results.phonetic}</em></span>
                </div>
            </section>
            {props.results.meanings.map(function(meanings, index){
                return (
               <section key={index}>
                <Meaning meaning ={meanings}/>
                </section>
                );
                
            })}
</div>
        );      
    } else {
        return null;
    }   
}