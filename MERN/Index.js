const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./model/Employee")
const app = express();
app.use(express.json())
app.use(cors())



mongoose.connect("mongodb+srv://saimsaeed:lofty7610@cluster0.mthnjmc.mongodb.net/authentication")

app.post("/register", (req, res) => {
    EmployeeModel.create(req.body).then(employee => res.json(employee))
        .catch(err => res.json(err))
})


app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email }).then(user => {
        if (user) {
            if (user.password === password) {
                res.json(user)
            
              
            }
            else {
                res.json("Wrong Password")
            }
        }
        else {
            res.json("no record")
        }
    })

})

app.listen(3001, () => {
    console.log("Server is running");
})