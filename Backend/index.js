require('dotenv').config()

const express = require('express');
const Patient = require('./modal/Patient')
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

const URL = process.env.DB_URL_STIRNG;

console.log("connecting to", process.env.DB_URL_STIRNG);
mongoose.set("strictQuery", false);


mongoose.connect(URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.get('/',(request, response)=>{
    response.send("Server Started!!")
})
app.post('/register',async(req,res)=>{
try{
        const {
            name,
            age,
            gender
        } = req.body

        const patient = new Patient({
            name, age, gender
        })

        const savedPlace = await patient.save()
        res.status(201).json(savedPlace)
    }catch(err){
        console.log(err.message)
    }

})
app.listen(8080, ()=>{
    console.log(`Server running on 8080`);
});