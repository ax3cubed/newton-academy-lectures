const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  //res.sendFile(__dirname + '/checkout.html')
  fs.readFile("checkout.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading checkout page");
    }

    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(data);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
