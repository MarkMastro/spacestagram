import React from "react";

const DisplayItem=(props)=>{
   const {
        picture,
        description,
        location,
        keywords, 
        title,
        date
    } = props

    return (
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <img src = {picture}></img>
            <h3>{description}</h3>
        </div>
    )

}
export default DisplayItem;