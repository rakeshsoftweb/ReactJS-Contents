const reducer = function(state, action)
{
    console.log("reducer is called", action.type);
    switch(action.type)
    {
        case 'ADD-EMPLOYEE':
        return state = {msg:'Employee Added'};
        defaut :
            return null
    }
        
}

export default reducer;