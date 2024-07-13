import mongoose from "mongoose";
import { type } from "os";

const Signup = new mongoose.Schema({
   First_name :{
    type : String
   },

   Last_name : {
    type : String 
   },

   Email : {
    type: String,
    required : true,
    unique : true
   },
   
   Password : {
    type : String,
    required : true,
    unique : true
   }


},{timestamps:true})

 const signup = mongoose.model('Signup',Signup);
 export default signup