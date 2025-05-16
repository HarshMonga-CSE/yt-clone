// server.js
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4173;

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle all routes and return index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
