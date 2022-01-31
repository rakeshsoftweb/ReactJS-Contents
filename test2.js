function GetAllow(...allow)
{
    // let Allowance = [basic, hra, ca];
    // console.log(allow);
    // console.log(allow.length);
    allow.forEach(data=>{
        console.log(data);
    })
}

GetAllow(70000,20000,10000);
// GetAllow(70000,20000,10000,5000);
// GetAllow(70000,20000,10000,4000,8000);