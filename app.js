const cors = require("cors")
const express = require("express")
const app = express()

app.use(cors())

app.get('/lessons', (request, response)=> {
    response.json(
      [
        {topic:"mathematics", location:"Hendon",price:100}
       ,{topic:"English", location:"Colindale",price:80}
       ,{topic:"French", location:"Brent Cross",price:90}
       ,{topic:"Igbo", location:"Golders Green",price:120}]
    )
})

app.get('/user', (request, response)=> {
    response.json(
        [
            {
                user: "Chelsea",
                email: "abc@yahoo.com",
                password: "uni"
            }
        ]
    )
})

app.listen(3000, ()=> {
    console.log("Server is running!")
})