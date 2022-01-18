import React from "react";

const SearchBar=(props)=>{

    const {searchField, onChange, handleClick}=props
    
    return(
        <div>  
            <form onSubmit={e=>e.preventDefault}>
                <input
                name="search" 
                type="text" 
                value={searchField} 
                onChange={e=>{onChange(e.target.value)}}/>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;