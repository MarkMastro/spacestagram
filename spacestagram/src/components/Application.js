import React from "react";
import dataFetcher from "../hooks/dataFetcher"
import SearchBar from "./SearchBar/SearchBar"
import { useState } from "react";
import DisplayItem from "./DisplayItem/DisplayItem";
import Results from "./Results/Results";


export default function Application(props){
    const {searchAPI} = dataFetcher();
    const [searchField, setSearchField] = useState("")
    const [searchResults, setSearchResults] = useState([])

    
    const handleClick=(e)=>{
        e.preventDefault();
        searchAPI(searchField)
        .then(data=>{
            setSearchResults(data)
        })
        
    }
    
   

    return(
        <div>
            <main>
                <SearchBar handleClick={handleClick} onChange={setSearchField}/>
                {searchResults.length != 0? <Results searchResults= {searchResults}/> : <h2>Your query returned no results</h2>}
            </main>
        </div>
    )
}
// return results from search, then create a  "post" component with the info that wasreturn