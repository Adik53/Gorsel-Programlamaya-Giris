import React from "react";
import {BsCheck} from "react-icons/bs";

const Check = ({isCompleted }) =>{
    return(
        <div className='Border'>
            {isCompleted  && <BsCheck className='Check'/>}
        </div>
    )}

export default Check