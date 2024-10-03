const express = require('express');
const app=express();

app.use(express.json());

const students=[
    {id:1,name:'yashwant mali', email:'yashwantmali555@gmail.com'},
    {id:2,name:'vaishnavi mali', email:'vaishnavimali555@gmail.com'},
    {id:3,name:'tejaswini mali', email:'tejaswinimali555@gmail.com'}
];

app.get('/',(req,res)=>{
res.send('welcome to my api');
});

app.get('/students',(req,res)=>{
    res.json(students);
});

app.get('/students/:id',(req,res)=>{
    const stud= students.find(u=> u.id===parseInt(req.params.id));
    if(!stud){
        res.status(404).send("user not found");
    }
    res.send(stud);
})

app.post('/students',(req,res)=>{
    const stud= {
        id:students.length+1,
        name:req.body.name,
        email:req.body.email
    };
    students.push(stud);
    res.json(stud);
})


app.listen(3000, ()=>{
    console.log("this code is running on localhost:3000")
})