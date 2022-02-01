import React from 'react';
function Display(props)
{
    return(
        <>
        <h2 className="text-primary">This is my Display Component</h2>
        <h1>{props.title}</h1>
        </>
    )
}

export default Display;