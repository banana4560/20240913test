//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

server.get("/banana4560", (req,res)=>{      
    //DB       
    res.send("banana4560");  
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})