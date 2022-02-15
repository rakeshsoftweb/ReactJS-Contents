import React, { useState } from 'react';
import store from './store/store';
import Increasecounter from './action/Increasecounter';
import Decreasecounter from './action/Decreasecounter';

function Counter()
{
    const [Count, setCount] = useState(10);

    const onIncreaseCounter = ()=>{
        console.log("Counter Component is called");
        store.dispatch(Increasecounter(Count));
    }
    const onDecreaseCounter = ()=>
    {
        console.log("Counter Component is called");
        store.dispatch(Decreasecounter(Count)); 
    }
    const onShowCounterValue = ()=>{
        let Result = store.getState();
        console.log("Result of get state ", Result);
        let counter = Result.increasecounterValue;
        let decreaseCounter = Result.decreasecounterValue;
        decreaseCounter--;
        counter++;
        console.log("increased value " , counter, "decreased value ", decreaseCounter);
    }
    return(
        <>
            <h5>Counter</h5>
            <button onClick={onIncreaseCounter}>Increase Counter</button>
            <button onClick={onDecreaseCounter}>Decrease Counter</button>
            <button onClick={onShowCounterValue}>Show Counter Value</button>
        </>
    )
}

export default Counter;