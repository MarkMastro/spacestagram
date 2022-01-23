import React from 'react'
import DisplayItem from '../DisplayItem/DisplayItem'

const Results = (props) => {
  const { results } = props

  let id = 0
  return (
    results.map((pictureItem) => {
      id++
      return (
                  <DisplayItem
                  id={id}
                  key={id}
                  picture = {pictureItem.picture}
                  description = {pictureItem.description}
                  title = {pictureItem.title}
                  date = {pictureItem.date}
                  />
      )
    }
    )
  )
}
export default Results
