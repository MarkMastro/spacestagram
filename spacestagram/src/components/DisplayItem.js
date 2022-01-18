import React from "react";

export default DisplayItem=(props)=>{
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
            <img src = {picture}></img>
        </div>
    )

}