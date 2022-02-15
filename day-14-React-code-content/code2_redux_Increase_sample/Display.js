import React from 'react';

function Display()
{   
    function AddText(str1, ...str2)
    {
        console.log("str1", str1);
        console.log("str2", str2);
        return (str1[0] + str2[0] + str1[1] + str2[1]);
    }
    const onclickHandler =()=>{
        let age = 12;
        let location = "New Delhi";
        let String1 = AddText `this is my age ${age} and this my location : ${location}`
        console.log("on click" , String1);
    }
    return(
        <>
            <h5>Tag Literal</h5>
            <button onClick={onclickHandler}>Click</button>
        </>
    )
}

export default Display;