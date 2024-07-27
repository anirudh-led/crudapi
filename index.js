const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post('api/products', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

mongoose
  .connect(
    "mongodb+srv://anibunny:notsosecure@cluster0.udfv9lt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });
