import React, {useEffect, useState} from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../DisplayItem/DisplayItem.css"


const DisplayItem=(props)=>{
    const [like, setLike] = useState(false)
   const {
        id,
        picture,
        description,
        title,
        date
    } = props
    const likeClick=()=>{
        setLike((prev)=>!prev)
        
    }
    useEffect(() => {
        if(like){
            let array=JSON.parse(localStorage.getItem("likes")) || [];
            array.push(
                {   id,
                    picture,
                    description,
                    title,
                    date 
                }
            )
            localStorage.setItem("likes", JSON.stringify(array))
       
        }
        if (!like){
            let array = JSON.parse(localStorage.getItem("likes")) || [];
            if(array.length > 0){
                let index = array.findIndex(ind=>ind.title==title)
                
                if(index!=-1) {
                    array.splice(index,1)
                    localStorage.setItem("likes", JSON.stringify(array))}
                }
        }
        
      }, [like]);
    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>{date}</h2>
            <img src = {picture}></img>
            <h3>{description}</h3>
            <div className="like-button" onClick={likeClick}>
                    <FaHeart />
                </div>
        </div>
    )

}
export default DisplayItem;