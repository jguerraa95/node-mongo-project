const mongoose = require("mongoose")

const dbConnet = () =>  {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI)
        .then(()=>{console.log('***CONNECTED SUCCESSFULLY***')}) 
        .catch((err)=>{ console.error(err)})
    }

module.exports = dbConnet