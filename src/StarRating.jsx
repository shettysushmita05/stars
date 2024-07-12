import React, { useState } from 'react';
import "./StarRating.css"



const StarRating=()=>{
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0);

    const getLabel=(rating)=>{
        switch(rating){
            case 1:
                return "Terrible";
            case 2:
                return "Bad";
            case 3:
                return "Okay";
            case 4:
                return "Good";
            case 5:
                return "Excellent";
            default:
                return " ";
        }             
    };

    return(
        <div className="star-rating">
            {
                [...Array(5)].map((star,index)=>{
                    index+=1;
                    return(
                        <button 
                        type='button'
                        key={index}
                        className={index <= (hover || rating)? "on": "off"}
                        onClick={()=>setRating(index)}
                        onMouseEnter={()=>setHover(index)}
                        onMouseLeave={()=>setHover(rating)}
                        >
                            <span className="star">&#9733;</span>

                        </button>
                    );
                })
            }
            {rating >0 && <div className='rating-value'>your rating:{rating} stars {getLabel(rating)} </div> 
            }
        </div>
    )
}
export default StarRating;