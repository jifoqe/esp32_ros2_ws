const express = require("express");
const path = require("path");

const app = express();

// 讓靜態檔案可以被存取
app.use(express.static(__dirname));

// 首頁
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main.html"));
});

// 一定要用這個
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
