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
                        title: item.data[0].title,
                        date: item.data[0].date_created
                    }
                    resultsArray.push(resultObj)
                }
                
                return resultsArray
                
             })
             .catch((err)=>console.log("error"))
                
    }

    const randomPictureAPI=()=>{
        const url = `https://api.nasa.gov/planetary/apod?api_key=U50YdjBHsIpo8n2A4zuws92gF2sXp9T7WDJ64KP9&count=4`;
        return axios.get(url)
             .then((response)=>{
                const itemArray = response.data
                const resultsArray = [];

                for (const item of itemArray) {
                    let resultObj = {
                        picture: item.hdurl,
                        description: item.explanation,
                        title: item.title,
                        date: item.date
                    }
                    resultsArray.push(resultObj)
                }
                
                return resultsArray
                
             })
             .catch((err)=>console.log("error"))
                
    }
    return {searchAPI, randomPictureAPI}
}
export default dataFetcher;