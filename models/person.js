const mongoose= require('mongoose')
const personschema =mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        
    },
    favouritefoods:{
        type:[String],
    },
},
{collection :"persons"}
);
const personmodel =mongoose.model("person",personschema)
module.exports=personmodel;