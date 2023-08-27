const express = require('express');
const app = express();
const port = 4000;
app.get("/homepage" , (req, res) =>{
    res.send("hello");
});
app.get("/ourservices" , (req, res) =>{
    res.send("hello");
});
app.get("/contactus" , (req, res) =>{
    res.send("hello");
});

app.listen(
    port, () => {
        console.log(`server listenning on ${port}`);
    }
);