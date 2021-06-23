const myDb = require('../db');
const validator = require('validator');
class userController {

    post(req, res) {

        const { email, password, firstName, lastName } = req.query;

        if (!validator.isEmail(email) || !password.length >= 6 || !firstname.length >= 1 || !lastname.length >= 1) {
            console.log("The data from the site isn't valid");
            return;
        }

        var newUser = { email: email, password: password, firstname: firstName, lastname: lastName };
        myDb.getDb().collection("Users").insertOne(newUser, function (err, res) {
            if (err) throw err;
            console.log("1 user inserted");
            db.close();
        });
    };


    //=============================== GET USER =====================================


    generateAccessToken = (email) => {
        return jwt.sign({ email }, TOKEN);
    };

    TOKEN = "";//get my token...

    get(req, res) {
        res.setHeader("Access-Contol-Allow-Origin", 'http://localhost:3000');

        const { email, password } = req.params;

        myDb.getDb().collection("Users").findOne({ email: email, password: password }, function (err, result) {
            if (err) throw err;
            db.close();
            if (!result || result.length == 0) {
                return res.status(401).send();
            }
            if (result[0].password == password) {
                const token = generateAccessToken(email);
                console.log("token", token);
                return res.json({ token }).send();
            }
            else {
                return res.status(401).send();
            }
        });
    }

}

module.exports = new userController();