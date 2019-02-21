const express=require('express');
var app=express();
var upload=require('express-fileupload');
const port = 1111;
const http=require('http');
http.Server(app).listen(port)

app.use(upload());  //Middleware

app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})

app.post("/upload", function(req,res){
    console.log(req.files);
    if(req.files){
        var file=req.files.img,
            img=file.name;
        file.mv("sample",function(err){
            if(err){
                console.log(err);
                res.send("error occur");
            }
            else{
                //Run python script (core.py) to generate histogram
                const spawn = require("child_process").spawn;
                const pythonProcess = spawn('python',['core.py']);
                const http = require('http')
                // res.send("Done");
                res.sendFile(__dirname+'/hist.jpg');
            }
        })
    }
})

