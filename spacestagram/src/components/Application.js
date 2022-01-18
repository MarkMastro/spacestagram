import React from "react";
import dataFetcher from "../hooks/dataFetcher"
import SearchBar from "./SearchBar"
import { useState } from "react";
import DisplayItem from "./DisplayItem";


export default function Application(props){
    const {searchAPI} = dataFetcher();
    const [searchField, setSearchField] = useState("")
    const [searchResults, setSearchResults] = useState("")

    
    const handleClick=(e)=>{
        e.preventDefault();
        searchAPI(searchField).then(data=>{
            setSearchResults(data)
        })
    }
    
    const pictureItems=searchResults.map((pictureItem)=>{ 
        return(
          <DisplayItem 
          key={1} 
          picture={pictureItem.picture} 
          description = {pictureItem.description} 
          location = {pictureItem.location} 
          keywords={pictureItem.keywords}
          title={pictureItem.title}
          date={pictureItem.date}
          />
        )
      }) 

    return(
        <div>
            <main>
                <SearchBar handleClick={handleClick} onChange={setSearchField}/>
                {searchResults && pictureItems}
            </main>
        </div>
    )
}
// return results from search, then create a  "post" component with the info that wasreturn