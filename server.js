// 引入 express 模組
var express = require("express");

// 創建 express 應用
var server = express();

// 引入 nedb-promises 模組，用來處理資料庫
var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname + "/profolio.db"); // 創建資料庫實例

// 使用 Express 內建的靜態檔案中介軟體提供靜態資源
server.use(express.static(__dirname + "/banana"));

// 設定作品集的 API 路由
server.get("/profolio", (req, res) => {
  // 從資料庫中查詢所有作品集資料
  ProfolioDB.find({}).then(results => {
    if (results.length > 0) {
      // 如果資料存在，回傳 JSON 格式的資料
      res.json(results);
    } else {
      // 如果沒有資料，回傳錯誤訊息
      res.status(404).send("No data found!");
    }
  }).catch(err => {
    // 錯誤處理
    res.status(500).send("Error fetching data from database!");
  });
});

// 設定連接的端口
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
