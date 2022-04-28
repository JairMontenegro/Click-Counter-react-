import React from "react";
import '../styles-shets/counter.css'

function Counter ({numberOfClicks}){
    return(
        <div className="counter">
          {numberOfClicks}
        </div>
    )

}

export default Counter


