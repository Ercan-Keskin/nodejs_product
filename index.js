const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const productRouter = require("./src/routers/productRouter");

const app = express();

app.use(bodyParser.json());
app.use(productRouter);

const username = "admin";
const password = "şifreniz";
const databaseName = "products";

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.c7jvmfo.mongodb.net/${databaseName}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("Server 5000 portu ile çalışıyor");
});
