const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    Contact: {
        type: Number,
        require:true
    },
    Password: {
        type: String,
        require:true
    },

    isAdmin:{
        type:Boolean,
        default:false
    }

});

//define the model/collection name
const User= new mongoose.model("User", userSchema);
module.exports= User;

