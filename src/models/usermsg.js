const mongoose = require('mongoose');
const validator = require('validator');



const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
         validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Id")
             }
         }
    },
    phone:{
        type:Number,
        required:true,
    
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})


// need to create a collection

const User = mongoose.model("User", userSchema);

module.exports = User;

















// a document schema is a json object that allows you to define the shape and content of documents and
//embedded documents in a collection You can use a scheam
// to require a specific set of feilds. configure the content
// of a field. or to validate changes to a document based on its 
// beggining and ending states.