import mongoose from "mongoose";
const favSchema =new mongoose.Schema({
    favURL:{
        type: String,
        required:true,
    },
})

const FavModel= mongoose.model("favurl",favSchema);
export default FavModel;