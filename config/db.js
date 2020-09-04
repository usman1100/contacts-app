const mongoose = require('mongoose')
const config = require('./default.json')

const db = config.mongoURI;

const connectDB = () => {
    mongoose.connect(db,{
        useUnifiedTopology: true,
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false
    }).
        then(()=>{console.log("Database connected to " + db);})
        .catch((err)=>{
            console.log("Error connecting to DB")
            console.log(err)
            process.exit(1);
        })
}

module.exports = connectDB;