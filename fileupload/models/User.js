import mongoose from "mongoose";

//Defining Schema
const userSchema = new mongoose.Schema({
    filename:{type:String, required:true},
    path:{type:String,  required:true}

});

//Model
const UserModel = mongoose.model("user", userSchema);

export default UserModel;