
const express = require('express');
const routes = express.Router();
const Student = require('../models/studentModels');
const Registration = require('../models/registrationModel');
const studentController = require('../controller/studentController');
const {verifyAccessToken}= require('../helpers/jwtHelper');



routes.get('/students', studentController.getStudent);
routes.get('/students/:id', studentController.getStudentId);
routes.post('/students', studentController.AddStudents);
routes.patch('/updateStudent/:id', studentController.updateStudents);
routes.delete('/deleteStudent/:id', studentController.deleteStudent);


//get a list of students from the database

/*routes.get('/students', async (req,res) => {
    // res.send({type: 'Get Request'});
    const result = await Student.find(ALL)({})
    res.send(result);
});*/



//add student to the database

/*routes.post('/students', async (req,res) => {
    try{
        const student = new Student(req.body)
        const results = await student.save();
        res.send(results);
    }catch(error){
        console.log(error.message)
    }
});*/





//update students in the database

/*routes.patch('/updateStudent/:id', async(req,res,next) => {
    //res.send({type:'Put Request'});
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new:true}
        const result = await Student.findByIdAndUpdate(id, update, options)
        
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
});*/



//delete a student from the database

/*routes.delete('/deleteStudent/:id', async(req,res,next) => {
   // res.send({type:'Delete Request'});
   try {
    const id = req.params.id;
    const result = await Student.findByIdAndDelete(id);
    res.send(result);
   } catch (error) {
    console.log(error.message)
   }
});*/




//get a list of users from the database

routes.get('/registration', async (req,res) => {
    // res.send({type: 'Get Request'});
    const result = await Registration.find({})
    res.send(result);
});

//add user to the database

routes.post('/registration', async (req,res) => {
    try{
        const registration = new Registration(req.body)
        const results = await registration.save();
        res.send(results);
    }catch(error){
        console.log(error.message)
    }
});

//update user in the database

routes.patch('/updateRegistration/:id', async(req,res,next) => {
    //res.send({type:'Put Request'});
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new:true}
        const result = await Registration.findByIdAndUpdate(id, update, options)
        
        res.send(result);
    } catch (error) {
        console.log(error.message)
    }
});

//delete a user from the database

routes.delete('/deleteRegistration/:id', async(req,res,next) => {
   // res.send({type:'Delete Request'});
   try {
    const id = req.params.id;
    const result = await Registration.findByIdAndDelete(id);
    res.send(result);
   } catch (error) {
    console.log(error.message)
   }
});


module.exports = routes;