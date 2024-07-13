import express from 'express'
import data from '../Models/Data.js';

const route3 = express.Router();


route3
.get('/',async(req,res)=>{

   try {
     const alldata = await data.find({createdby:req.user?._id});
     console.log("Mera Data yahi hai :\n",alldata);
      res.status(200).json(alldata);
   } catch (error) {
      console.log("error in rout3 get:"+error);
      res.status(404).json({data : 'null'});
   }

})
.post('/',async(req,res)=>{
   try{
      await data.create({
         Message : req.body.message,
         createdby : req.user._id
      })
       res.status(200).send({'status':'Uploaded'})
   }
   catch(error){
      console.log("Rout3 Post Error:"+error);
      res.status(404).send({'status':'Not Uploaded'});
   }
})


export default route3
