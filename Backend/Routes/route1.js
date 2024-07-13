import express from 'express';
import signup from '../Models/Signup.js';
import LoginDB from '../Functions/LoginDB.js';

const route1 = express.Router();

route1
  .get('/', (req, res) => {
    res.redirect('http://localhost:5173/signup');
  })
  .post('/', async (req, res) => {
    const data = req.body;
 
    try {
      // Create a new signup document
      await signup.create({
        First_name: data.First_name,
        Last_name: data.Last_name,
        Email: data.Email,
        Password: data.Password
      });
      
      // Create a new login document
      await LoginDB(data, res);
      
      // Redirect to login page after successful creation
      res.status(201).send({status:'Register the User',redirect:'http://localhost:8000/login'});
    } catch (error) {
      console.error("Error during signup or login creation:", error.keyPattern);
      res.status(500).send({ status: 'Server Side Error',message:error.errmsg});
    }
  });

export default route1;
