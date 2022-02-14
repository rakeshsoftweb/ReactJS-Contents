const reducer = function(state, action)
{
    console.log("reducer is called", action.type);
    return('test');
}

export default reducer;