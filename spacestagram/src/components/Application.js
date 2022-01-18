import React from "react";
import dataFetcher from "../hooks/dataFetcher"
import SearchBar from "./SearchBar/SearchBar"
import { useState } from "react";
import DisplayItem from "./DisplayItem/DisplayItem";
import Results from "./Results/Results";
import { FaHome } from "react-icons/fa";


export default function Application(props){
    const {searchAPI, randomPictureAPI} = dataFetcher();
    const [searchField, setSearchField] = useState("")
    const [results, setResults] = useState([])

    
    const searchClick=(e)=>{
        e.preventDefault();
        searchAPI(searchField)
        .then(data=>{
            console.log("search results", data)
            setResults(data)
        })
        
    }

    const homeClick=(e)=>{
        e.preventDefault();
        randomPictureAPI()
        .then(data=>setResults(data))
    }
    
   

    return(
        <div>
            <main>
                <SearchBar onClick={searchClick} onChange={setSearchField}/>
                <div onClick={homeClick}>
                    <FaHome a="google.com"/>
                </div>

                {results.length != 0? <Results results= {results}/> : <h2>Your query returned no results</h2>}
            </main>
        </div>
    )
}
// return results from search, then create a  "post" component with the info that wasreturn