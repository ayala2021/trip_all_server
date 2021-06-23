const mongoose = require('mongoose');

class db{

    constructor(){}

   async connectToMongo(){
        const url= "mongodb://srv1:27017/211660857Project";

        mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true}).then(() =>{ 
                console.log("DB connected!")})
                .catch((err)=>{ console.log(err)})
        }
}

module.exports = new db();


