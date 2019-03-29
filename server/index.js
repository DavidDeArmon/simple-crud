require("dotenv").config();
const express = require('express');
const massive = require('massive');
const { json } = require("body-parser");

const app = express()
const port = 3001

app.use(json());

massive(process.env.DATABASE_URL).then(dbInstance => {app.set("db", dbInstance);});

app.listen(port, () => console.log(`App listening on port ${port}!`))

//Create
app.post("/employees",(req,res)=>{
    let db=req.app.get('db');
    const {fname,lname,email,phone,salary} = req.body
    db.createEmployee([fname,lname,email,phone,salary]).then((response)=>{
        res.status(200).send(response)
    })
})
//Read
app.get("/employees",(req,res)=>{
    let db=req.app.get('db');
    db.getEmployees().then((response)=>{
        res.status(200).send(response)
    })
})
//Update
app.put("/employees",(req,res)=>{
    let db=req.app.get('db');
    const {id,fname,lname,email,phone,salary} = req.body
    db.editEmployee([id,fname,lname,email,phone,salary]).then((response)=>{
        res.status(200).send(response)
    })
})
//Delete
app.delete("/employees/:id",(req,res)=>{
    let db=req.app.get('db');
    const {id} = req.params
    db.deleteEmployee(id).then((response)=>{
        res.status(200).send(response)
    })
})
