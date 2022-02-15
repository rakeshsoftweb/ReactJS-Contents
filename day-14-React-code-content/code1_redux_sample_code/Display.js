import React, {useState} from 'react';
import DisplayDetails from './DisplayDetails';

 export default function Display()
 {
     const [value1, setValue1] = useState();
     const onUpdate = (val1)=>{
         console.log("onupdate at Display", val1);
         setValue1(val1);
     }
     return(
         <>
            <h5>Display : {value1}</h5>
            <DisplayDetails onUpdate={onUpdate}/>
         </>
     )
 }
