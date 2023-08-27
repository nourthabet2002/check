const express = require('express');
const { timeMiddleware } = require('./middelwares/time');
const app = express();
const port = 5000;
app.set("view engine","pug")

app.use(timeMiddleware)
app.get("/homepage" , (req, res) =>{
    res.render("homepage");
});
app.get("/ourservices" , (req, res) =>{
    res.render("ourservices");
});
app.get("/contactus" , (req, res) =>{
    res.render("contactus");
});

app.listen(
    port, () => {
        console.log(`server listenning on ${port}`);
    }
);