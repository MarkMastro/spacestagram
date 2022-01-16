import React from "react";
import dataFetcher from "../hooks/dataFetcher"
import SearchBar from "./SearchBar"

export default function Application(props){
    dataFetcher()

    return(
        <div>
            <main>

            </main>
        </div>
    )
}