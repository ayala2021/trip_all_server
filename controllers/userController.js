const db = require('../db');
const user = require('../Models/user');
class userController
{
 async get(req, res){
    let result = await user.find({_id: req.params.useId});
    res.send(result);
 }

 async login(req, res){
   let result = await user.find({email: req.params.email, password: req.params.password});
   res.send(result);
}

 async post(req, res){
    let newUser = new user(req.body);
    let saved = await newUser.save();
    res.send(saved);
 }

 async update(req, res){

   let userToUpdate = req.body;
   let id = req.body._id;
   const filter = { _id: id };
   const update = userToUpdate;
   
   let oldUser = await user.findOneAndUpdate(filter, update);
   let newUser = await user.find({_id: id});
   res.send(newUser);
 }

 async delete(req, res){
   let result = await user.deleteOne({_id : req.body._id});
   res.send(result);
 }
}

module.exports = new userController();