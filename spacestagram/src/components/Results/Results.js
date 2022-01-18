import React from "react";
import DisplayItem from "../DisplayItem/DisplayItem";

const Results=(props)=>{

    const {results} = props;

    
    let key = 0;
    return(
        results.map((pictureItem)=>{ 
                key++;
                return(
                  <DisplayItem 
                  key={key} 
                  picture = {pictureItem.picture} 
                  description = {pictureItem.description} 
                  location = {pictureItem.location} 
                  keywords = {pictureItem.keywords}
                  title = {pictureItem.title}
                  date = {pictureItem.date}
                  />
                )
        }
    )
    )
}
export default Results