const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/nodemon", (req, res) => {
    res.sendFile(__dirname + "/public/nodemon.html");
});

app.get("/routes", (req, res) => {
    res.sendFile(__dirname + "/public/routes.html");
});

app.get("/variables", (req, res) => {
    res.sendFile(__dirname + "/public/env_variables.html");
});

app.get("/script", (req, res) => {
    res.sendFile(__dirname + "/public/script.html");
});

app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/public/api.html");
});

app.get("/static", (req, res) => {
    res.sendFile(__dirname + "/public/static.html");
});



app.listen(PORT, (error) => {
    if (error){
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT))
});