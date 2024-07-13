import mongoose from "mongoose";


async function Connection(url){
    try {
       await mongoose.connect(url)
       console.log('Connected MongoDB');
    } catch (error) {
        console.log('Something Went Wrong'+error);
    }
}

export default Connection;