import React from "react";
import '../styles-shets/button.css';

function ButtonFun ({text, isClickButton, setClick }) {
    return(
      <button  
      className = { isClickButton ? 'click-button' : 'restart-button' }
      onClick = {setClick} >
        {text}
      </button>
    )
}

export default ButtonFun;


// new syntaxis to add code more concise 
//insted  key props we can use DESTRUCTURING SYNTAX so 
//if you can see the side where the props were, you can see that () has a pair of {} where inside we can give the properties that we may need
//also we need to notice that the classname of our component button is a dinamuc class which it have a conditional ternary. remember ? : javascript basic
// and we add an event listtener to our component as a parameter which  is a function that will allow it to happen when you click the button. 
// remember that the react comoments HAVE TO START WITH UPPERCASE. 
