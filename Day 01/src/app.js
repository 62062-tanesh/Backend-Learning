const express = require('express')

const app = express()

app.use(express.json())

const notes = []

app.post('/notes', (req,res) => {
    notes.push(req.body);

    res.status(201).json({
        message: "Note Created Successfully."
    })
    
})
 

app.get('/notes', (req,res) =>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})


console.log("The Code is here")
app.delete('/notes/:index', (req,res)=>{
    
    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message :"Note Deleted Successffully"
    })
})

module.exports = app
