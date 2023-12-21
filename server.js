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

app.post("/deleteFromJson", (req, res) => {
  const filePath = "public/assets/data/ice_cream.json";
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
        console.log(jsonData);
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
            res.body = filtered_array;
          }
        });

       
        console.log(ice_cream_data);
      } catch (error) {}
    }
  });
});

app.listen(3200, () => {
  console.log("Server is running on port 3200");
});
