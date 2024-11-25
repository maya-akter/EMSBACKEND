import mongoose from "mongoose";

const connectTodb=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export default connectTodb;