import axios from "axios";
import{useState} from "react";

const dataFetcher=()=>{

    const searchAPI=(searchField)=>{
        const url = `https://images-api.nasa.gov/search?q=${searchField}&media_type=image`;
        return axios.get(url)
             .then((response)=>{
                 
                const itemArray = response.data.collection.items
                const resultsArray = [];

                for (const item of itemArray) {
                    let resultObj = {
                        picture: item.links[0].href,
                        description: item.data[0].description,
                        location: item.data[0].location,
                        keywords: item.data[0].keywords, 
                        title: item.data[0].title,
                        date: item.data[0].date_created
                    }
                    resultsArray.push(resultObj)
                }
                
                return resultsArray
                
             })
             .catch((err)=>console.log("error"))
                
    }
    return {searchAPI}
}
export default dataFetcher;