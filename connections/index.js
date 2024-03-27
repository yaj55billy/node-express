const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB) 
  .then(() => console.log('資料庫連接成功'))
  .catch((error) => console.log(error));