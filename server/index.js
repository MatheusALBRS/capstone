const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the other side..." });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
