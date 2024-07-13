import mongoose from "mongoose"


const Data = new mongoose.Schema({

Message :{
    type : String,
    required :true,
},
createdby :{
    type: mongoose.Schema.Types.ObjectId,
},
},{timestamps : true});

const data = mongoose.model('data',Data);

export default data;