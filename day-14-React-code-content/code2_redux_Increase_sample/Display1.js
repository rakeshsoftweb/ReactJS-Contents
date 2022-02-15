import React, { createContext, useContext } from 'react';

const DisplayContext = createContext();

function Display1() {
    const displayText = { dispName: "It is my Component" };
    return (
        <>
            <h5>Display 1 : {displayText.dispName}</h5>
            <DisplayContext.Provider value={displayText}>
                <Display2 />
            </DisplayContext.Provider>
        </>
    )
}

const Display2 = () => {
    return (
        <>
            <h5>Display 2</h5>
            <Display3 />
        </>
    )
}

const Display3 = () => {
    let { dispName } = useContext(DisplayContext)
    return (
        <>
            <h5>Display 3 {dispName}</h5>
        </>
    )
}

export default Display1;