const Increasecounter = function(cnt)
{
    console.log("action is called");
    return {type:'COUNTER-INCREASE', payload:{countervalue:cnt}}
}

export default Increasecounter;