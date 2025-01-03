// 引入 express 模組
var express = require("express");

// 創建 express 應用
var server = express();

var bodyParser = require("body-parser");

// 使用 Express 內建的靜態檔案中介軟體提供靜態資源
server.use(express.static(__dirname +"/banana"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());


// 引入 nedb-promises 模組，用來處理資料庫
var DB = require("nedb-promises");
var PortfolioImg = DB.create(__dirname + "/profolio.db"); // 創建資料庫實例

server.get("/portfolio", (req, res)=>{
  //DB find
  PortfolioImg.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
      })
})

/*server.get("/profolio", (req,res)=>{
  //DB
  ProfolioDB.find({}).then(results=>{
    if(results != null){
         res.send(results);
    }else{
        res.send("Error!");
    }
  })
})*/

server.listen(80, ()=>{
  console.log("Server is running at port 80.");
})