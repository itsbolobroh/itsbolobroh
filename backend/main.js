const express = require("express");
var cors = require('cors')
const app = express();
const port = 8000;

app.use(cors())

app.get("/", (req, res) => {
  console.log("GOT GET REQUEST!")
  const listElements = [
    "ONE","TWO","THREE"
  ]
  res.send(listElements);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
