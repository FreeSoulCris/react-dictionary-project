import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary (props){
    let [keyword, setKeyword] = useState (props.defaultKeyword);
    let [results, setResults ] = useState(null);
    let [loaded, setLoaded] = useState (false);

    function handleResponse(response){
        setResults(response.data);

    }

    function search(){
        let key ="0239330ab540e803o5b4f9t7e63fbef4" 
        let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`
  
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();

    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }

    function load (){
        setLoaded(true);
        search()
    }
        if (loaded){  
    
    return (
       <div className="Dictionary">
            <section>
                <div className="Title">
                    <h1>What word do you want to look up?</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
                </form>
                <div className="hint">
                <em>Suggested words: sunset, optimism, resilience...  </em>  
                </div>
            </section>   
            <Results results={results}/>
       </div>
        
    );
} else{
   load(); 
}
    }

