const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public")); // Serve frontend from public/

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`✅ Server Running on PORT ${PORT}`);
});
