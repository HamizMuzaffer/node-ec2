const express = require("express");
const PORT = 80;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello From Server");
});
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
