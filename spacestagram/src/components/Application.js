import React, { useState, useRef, useEffect, useCallback } from "react";
import useDataFetcher from "../hooks/useDataFetcher"
import useEvent from "../hooks/useEvent";
import SearchBar from "./SearchBar/SearchBar"
import DisplayItem from "./DisplayItem/DisplayItem";
import Results from "./Results/Results.js";
import { FaHome } from "react-icons/fa";


export default function Application(props){
    const [searchField, setSearchField] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([]);
    // const [page, setPage] = useState(1);
    const [mode, setMode] = useState('Home')
    const {searchAPI, randomPictureAPI}= useDataFetcher();

    localStorage.setItem("likes", JSON.stringify([]))

    // const loader = useRef(null);

    // const handleObserver = useCallback((entries) => {
    //     const target = entries[0];
    //     if (target.isIntersecting) {
    //       setPage((prev) => prev + 1);
    //         console.log("page", page)
         
    //     }
    //   }, []);

    //   useEffect(() => {
    //     const option = {
    //       root: null,
    //       rootMargin: "20px",
    //       threshold: 0
    //     };
    //     const observer = new IntersectionObserver(handleObserver, option);
    //     if (loader.current) observer.observe(loader.current);
    //   }, [handleObserver]);
    
    const searchClick=(e)=>{
        e.preventDefault();
        console.log("search")

        setMode('Search')
        setResults([])
        setIsLoading(true)

        searchAPI(searchField)
        .then(data=>{
            setResults(data)
        })
        
    }

    const homeClick=(e)=>{
        e.preventDefault();
        console.log("home")
        setResults([])
        setSearchField('')
        randomPictureAPI()
        .then((newResults)=>{
            setResults(newResults)
        })
        setMode('Home')
        // setPage(1);
    }

    
  const handleScroll = () => {
    if (isLoading) {
      return;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        console.log("adding new comps")
        setIsLoading(true)
        randomPictureAPI()
        .then((newResults)=>{
            setResults([...results, ...newResults])
        })
    }
  };

  useEvent('scroll', handleScroll);
  
   

    return(
        <div>
            <main>
                <SearchBar onClick={searchClick} onChange={setSearchField}/>
                <div onClick={homeClick}>
                    <FaHome/>
                </div>
                { results.length != 0 ? <Results mode ={mode} results= {results}/> : <h2>Your query returned no results</h2>}
                    {isLoading && <h2>Loading...</h2>}

            </main>
        </div>
    )
}

