const express = require('express');
const mongoose = require('mongoose');
const personmodel = require('./models/person');
const documentId = '64f8965a71aaa264cb6a5402';
const app = express();
const port = 5000;
require('dotenv').config()
console.log('ENV VARS ====>${process.env.DB_URL}')
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("connected to db");

}
).then(()=>{
    app.listen(
    port, () => {
        console.log(`server listenning on ${port}`);
    }
);
});
app.post("/add",async(req,res)=>{
    
    
//     try{var response = await personmodel.find({name : "%sa%"})
//     res.json(response);
// }catch (error){
//     console.log()
// }
    let newperson = personmodel({
        name:"nour",
        age:21,
        favouritefoods:["pizza","meat"]
}); var response = newperson.save();

    res.json(response);
 
})
app.get("/find", async(req,res)=>{
    
    try
    {var response = await personmodel.find({name : "%nou%"})
      res.json(response);
     }catch (error){
        console.log()
}})
personmodel.findByIdAndRemove(documentId, (error, deletedDocument) => {
  if (error) {
    console.error('Error deleting document:', error);
  } else if (!deletedDocument) {
    console.log('Document not found.');
  } else {
    console.log('Document deleted successfully:', deletedDocument);
  }
});
personmodel.remove(conditions, (error) => {
    if (error) {
      console.error('Error deleting documents:', error);
    } else {
      console.log('Documents deleted successfully');
    }
  });
  let EmailModel = require('./email')
let msg = new EmailModel({
  email: 'ADA.LOVELACE@GMAIL.COM'
})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })