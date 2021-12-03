"use strict";

const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
app.use(compression());
app.use(express.json());
const PORT = 8818;

app.listen(PORT, () => {
    console.log(`Server Setup Listening on Port ${PORT}`);
});

app.get("/", async (req, res) => {
    return res.sendFile(path.join(__dirname, "./src/usernames.json"));
});

// http://localhost:8818/