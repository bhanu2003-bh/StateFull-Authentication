import mongoose from "mongoose";

const Login = new mongoose.Schema({

    Email : {
        type: String,
        required : true,
        unique : true
       },
       
       Password : {
        type : String,
        required : true,
        unique : true
       },
},{timestamps:true});
 const login = mongoose.model('Login',Login);

 export default login;