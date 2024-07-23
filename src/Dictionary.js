import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary (){
    let [keyword, setKeyword] = useState ("");
    let [results, setResults ] = useState(null);

    function handleResponse(response){
        setResults(response.data);

    }

    function search(event){
        event.preventDefault();
  
      let key ="0239330ab540e803o5b4f9t7e63fbef4" 
      let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`

      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    return (
       <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>   
            <Results results={results}/>
       </div>
        
    )
}