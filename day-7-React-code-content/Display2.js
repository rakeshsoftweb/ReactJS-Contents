import React, { useState } from 'react';
function Display2()
{
    const [cssStyle, setCssStyle] = useState({});

    // const myStyle = {'ccolor':'blue'};
    const onColorChange = ()=>{
        setCssStyle({color:'red'});
    }
    return(
        <>
            {/* <h1 className="hdr-text">CSS</h1> */}
            {/* <h1 style={{"color":"red","backgroundColor":'yellow',...myStyle}}>CSS code text</h1>
            <h1 style={myStyle}>CSS apply using variable</h1> */}
            <h1 style={cssStyle}>this is dynamic css apply</h1>
            <button onClick={onColorChange}>Click</button>
        </>
    )
}

export default Display2