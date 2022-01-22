import React, {useEffect, useState} from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../DisplayItem/DisplayItem.css"


const DisplayItem=(props)=>{
    const [like, setLike] = useState(false)
    console.log("disp item", props)
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
            console.log("storage", JSON.parse(localStorage.getItem("likes")))
            let array=JSON.parse(localStorage.getItem("likes"));
            array.push(
                {"id" : id, 
                 picture: {
                    picture,
                    description,
                    title,
                    date 
                }
            })
            localStorage.setItem("likes", JSON.stringify(array))
       
        }
        if (!like){
            console.log("unlike localstore",JSON.parse(localStorage.getItem("likes")))
            // localStorage.setItem("likes",localStorage.getItem("likes").slice(localStorage.getItem("likes").indexOf(id),1))
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