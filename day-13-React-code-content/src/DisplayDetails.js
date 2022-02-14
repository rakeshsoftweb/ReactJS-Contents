import React from 'react';
 export default function DisplayDetails(props)
 {

    const onDispDetailsUpdate = ()=>{
        const myValue = 10;
        props.onUpdate(myValue);
    }

     return(
         <>
            <h5>Display Details</h5>
            <button className="btn btn-primary" onClick={onDispDetailsUpdate}>Click</button>
         </>
     )
 }
