const express = require('express');
const routes = express.Router();
const User = require('../models/userModel');
const userController = require('../controller/userController');







routes.get('/getUsers/:id', userController.getUser);
routes.patch('/updateUsers/:id', userController.updateUser);
routes.delete('/deleteUsers/:id', userController.deleteUser);
routes.post('/register', userController.AddUser);

routes.post('/login', userController.login);
routes.post('/refreshtoken', userController.refreshToken);

//get a list of users from the database

/*routes.get('/users', async (req,res) => {
    // res.send({type: 'Get Request'});
    const result = await User.find({})
    res.send(result);
});*/


//add user to the database

/*routes.post('/users', async (req,res) => {
    try{
        const user = new User(req.body)
        const results = await user.save();
        res.send(results);
    }catch(error){
        console.log(error.message)
    }
});*/

//update user in the database

/*routes.patch('/updateUsers/:id', async(req,res,next) => {
    //res.send({type:'Put Request'});
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new:true}
        const result = await User.findByIdAndUpdate(id, update, options)
        
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
});*/



//delete a user from the database

/*routes.delete('/deleteUsers/:id', async(req,res,next) => {
   // res.send({type:'Delete Request'});
   try {
    const id = req.params.id;
    const result = await User.findByIdAndDelete(id);
    res.send(result);
   } catch (error) {
    console.log(error.message)
   }
});*/


module.exports = routes;