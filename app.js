const express = require('express');
const app = express();

const user = [
    {
        "name":"Akshay",
        "roll":29
    },
    {
        "name":"hellow",
        "roll":22
    },
    {
        "name":"Abho",
        "roll":25
    }
]

app.get('/user',(req,res)=>{
    res.send({
        msg:"List of user",
        success:true,
        data:user
    })
});



app.listen(80,()=>{
    console.log("listing to port 8080");
})