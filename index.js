const express = require('express');
const app = express();
const morgan = require('morgan');
const usersRoutes = require("./routes/users")

const port = process.env.port || 1233;

app.use(morgan("dev"));
app.use("/api/users", usersRoutes);

app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`);
})


app.get("/", (req,res)=>{
    res.json("Welcome to ContactsApp API")
})