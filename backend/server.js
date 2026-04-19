const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Updated Backend - Prasanna");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});