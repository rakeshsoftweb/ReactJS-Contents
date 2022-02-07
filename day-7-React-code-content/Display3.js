import React, { useState } from 'react';
function Display3()
{
    const [cssClass, setCssClass] = useState({});
   
    const onColorChange = ()=>{
        setCssClass("hdr-text");
    }
    return(
        <>
            <h1 className={'bg-success ' + cssClass}>this is dynamic css class apply</h1>
            <button onClick={onColorChange}>Click</button>
        </>
    )
}

export default Display3