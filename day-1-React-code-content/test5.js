// let arrData = [
//     {id:1,name:'Aman Singh',training:'React JS'},
//     {id:2,name:'Pranav Singh',training:'React JS'},
//     {id:3,name:'Adityee Singh',training:'React JS'},
//     {id:4,name:'Raman Singh',training:'React JS'},
//     {id:5,name:'Vinod Singh',training:'React JS'},
// ]

// let Result = arrData.forEach((value,index)=>{
//     console.log("Index ", index, " Value ", value);
//     return value;
// })

// console.log("Result ", Result);

// let arrData = [
//     {id:1,name:'Aman Singh',training:'React JS'},
//     {id:2,name:'Pranav Singh',training:'React JS'},
//     {id:3,name:'Adityee Singh',training:'React JS'},
//     {id:4,name:'Raman Singh',training:'React JS'},
//     {id:5,name:'Vinod Singh',training:'React JS'},
// ]

// let Result = arrData.map((value,index)=>{
//     console.log("Index ", index, " Value ", value);
//     return value.name;
// })

// console.log("Result ", Result);


// let arrData = [
//     {id:1,name:'Aman Singh',training:'React JS'},
//     {id:2,name:'Pranav Singh',training:'React JS'},
//     {id:3,name:'Adityee Singh',training:'React JS'},
//     {id:4,name:'Raman Singh',training:'React JS'},
//     {id:5,name:'Vinod Singh',training:'React JS'},
// ]

// let Result = arrData.filter((value,index)=>{
//     console.log("Index ", index, " Value ", value);
//     return value.id>2;
// })

// console.log("Result ", Result);


// let arrData = [
//     {id:1,name:'Aman Singh',training:'React JS'},
//     {id:2,name:'Pranav Singh',training:'React JS'},
//     {id:3,name:'Adityee Singh',training:'Angular'},
//     {id:4,name:'Raman Singh',training:'React JS'},
//     {id:5,name:'Vinod Singh',training:'React JS'},
// ]

// let Result = arrData.every((data,idx)=>{
//     console.log("Index ", idx, " Value ", data);
//     return data.training==='React JS';
// })

// console.log("Result ", Result);

let arrData = [
    {id:1,name:'Aman Singh',training:'React JS'},
    {id:2,name:'Pranav Singh',training:'React JS'},
    {id:3,name:'Adityee Singh',training:'Angular'},
    {id:4,name:'Raman Singh',training:'React JS'},
    {id:5,name:'Vinod Singh',training:'React JS'},
]

let Result = arrData.some((data,idx)=>{
    console.log("Index ", idx, " Value ", data);
    return data.training==='JavaScript';
})

console.log("Result ", Result);