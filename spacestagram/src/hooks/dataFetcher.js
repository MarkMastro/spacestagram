import axios from "axios";
import{useState} from "react";

const dataFetcher=()=>{
    const url = "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"
    return axios.get(url)
                .then((result)=>{
                    console.log(result)
                })
}
export default dataFetcher;