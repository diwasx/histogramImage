const express=require('express');
var app=express();
var upload=require('express-fileupload');
const port = 1111;
const http=require('http');
http.Server(app).listen(port)

app.use(upload());  //Middleware

console.log(`Listening at http://localhost:${port}`);
app.get("/",function(req,res){
    res.sendFile(__dirname+'/public/index.html');
})

app.post("/upload", function(req,res){
    // console.log(req.files);
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
               
                // This method doesn't wait for python to finish
                // const spawn = require("child_process").spawn;
                // const pythonProcess = spawn('python',['core.py'])
                // // res.send("Done");
                // res.sendFile(__dirname+'/hist.png');

                var child = require('child_process').exec('python core.py')
                child.stdout.pipe(process.stdout)
                child.on('exit', function() {
                    // process.exit()
                    res.sendFile(__dirname+'/hist.png');
                })

            }
        })
    }
})

