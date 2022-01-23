import React from 'react'
import styles from './SearchBar.css'

const SearchBar = (props) => {
  const { searchField, onChange, onClick } = props

  return (
        <div>
            <form onSubmit={e => e.preventDefault} label="Search">
                <input
                name="search"
                type="text"
                value={searchField}
                className={styles.input}
                onChange={e => { onChange(e.target.value) }}
                placeholder='Search'/>
                <button onClick={onClick}>Search</button>
            </form>
        </div>
  )
}

export default SearchBar
