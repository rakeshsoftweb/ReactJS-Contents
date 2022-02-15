const reducer  = function(state, action)
{
    console.log("reducer is called");
    switch(action.type)
    {
        case 'COUNTER-INCREASE':
            // return state = {counterValue : action.payload.countervalue};
            return {...state, increasecounterValue : action.payload.countervalue};
        case 'COUNTER-DECREASE':
            // return state  = {decreasecounterValue : action.payload.countervalue};
            return {...state, decreasecounterValue : action.payload.countervalue};
        default :
            return null;
    }
    
}

export default reducer;