import React, { useEffect, useState } from 'react'
import useDataFetcher from '../hooks/useDataFetcher'
import useEvent from '../hooks/useEvent'
import SearchBar from './SearchBar/SearchBar'
import Results from './Results/Results.js'
import { FaHome, FaRegHeart } from 'react-icons/fa'
import styles from './Application.css'

export default function Application (props) {
  const [searchField, setSearchField] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])
  // const [page, setPage] = useState(1);
  const [mode, setMode] = useState('Home')
  const { searchAPI, randomPictureAPI } = useDataFetcher()

  useEffect(() => {
    randomPictureAPI()
      .then((newResults) => {
        setResults(newResults)
        setIsLoading(false)
      })
  }, [])

  const searchClick = (e) => {
    e.preventDefault()
    setMode('Search')
    setResults([])
    setIsLoading(true)

    searchAPI(searchField)
      .then(data => {
        setResults(data)
      })
  }

  const homeClick = (e) => {
    e.preventDefault()
    setResults(['empty'])
    setSearchField('')
    randomPictureAPI()
      .then((newResults) => {
        setResults(newResults)
        setIsLoading(false)
      })
    setMode('Home')
  }

  const loadLikesPage = () => {
    setMode('Likes')
    setResults(JSON.parse((localStorage.getItem('likes'))))
  }

  const handleScroll = () => {
    if (mode === 'Likes') { return }
    if (isLoading) {
      return
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setIsLoading(true)
      randomPictureAPI()
        .then((newResults) => {
          setResults([...results, ...newResults])
          setIsLoading(false)
        })
    }
  }

  useEvent('scroll', handleScroll)

  return (
        <div>
            <main>
                <nav >

                    <h2>Spacestagram</h2>
                    <SearchBar onClick={searchClick} onChange={setSearchField}/>
                <div className='nav-buttons'>
                     <div onClick={homeClick}>
                        <FaHome size={30}/>
                    </div>
                    <div onClick={loadLikesPage}>
                    <FaRegHeart size={30} color='black'/>

                    </div>
                </div>

                </nav>
                <div className='results'>
                    { results.length !== 0 ? <Results mode ={mode} results= {results} /> : mode === 'Search' ? <h2>Your query returned no results</h2> : null}
                    {isLoading && <h2>Loading...</h2>}
                </div>

            </main>
        </div>
  )
}
