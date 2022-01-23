import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import styles from '../DisplayItem/DisplayItem.css'

const DisplayItem = (props) => {
  const [like, setLike] = useState(false)
  const {
    id,
    picture,
    description,
    title,
    date
  } = props
  const likeClick = () => {
    setLike((prev) => !prev)
  }
  useEffect(() => {
    if (like) {
      const array = JSON.parse(localStorage.getItem('likes')) || []
      array.push(
        {
          id,
          picture,
          description,
          title,
          date
        }
      )
      localStorage.setItem('likes', JSON.stringify(array))
    }
    if (!like) {
      const array = JSON.parse(localStorage.getItem('likes')) || []
      if (array.length > 0) {
        const index = array.findIndex(ind => ind.title === title)

        if (index !== -1) {
          array.splice(index, 1)
          localStorage.setItem('likes', JSON.stringify(array))
        }
      }
    }
  }, [like])
  return (
        <div className="container">
            <img src = {picture}></img>
            <h3>{title}</h3>
            <h3 className="description">{description}</h3>
            <div className="footer">
                <h4>{date}</h4>
                <div className="like-button" onClick={likeClick}>
                    {like ? <FaHeart size={20} color='red'/> : <FaRegHeart size={20} color='black'/> }

                </div>
            </div>

        </div>
  )
}
export default DisplayItem
