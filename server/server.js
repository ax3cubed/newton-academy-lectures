const express = require("express");
const fs = require("fs");
const PORT = 3200;
const cors = require("cors");
const app = express();
const FRONTEND_URL = "http://localhost:3000";
app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
  })
);

app.get("/", (req, res) => {
  //res.sendFile(__dirname + '/checkout.html')
  res.status(200).send("Welcome to checkout backend");
});

//TODO
//CREATE Fetch Cakes API

app.post("/deleteFromJson", (req, res) => {
  const filePath = "public/data/ice_cream.json";
  const { id } = req.body;
  console.log({ id });
  //Steps

  //Read File
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file");
    } else {
      try {
        const ice_cream_data = JSON.parse(data);
        // Search the file for ID
        const filtered_array = ice_cream_data.filter((row) => row.id !== id);
        console.log(filtered_array);
        // Remove ID from file
        fs.writeFile(filePath, "", "utf8", (err) => {
          if (err) {
            console.error("Error emptying file");
          } else {
            fs.writeFile(
              filePath,
              JSON.stringify(filtered_array, null, 2),
              "utf8",
              (err) => {
                if (err) {
                  console.error("Error writing to filel", err);
                } else {
                  console.log(`Row id ${id} had been deleted sucessfully`);
                }
              }
            );
            res.status(200).send(filtered_array);
          }
        });

        console.log(ice_cream_data);
      } catch (error) {
        console.error(error);
      }
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port 3200");
});
