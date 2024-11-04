import express from "express";

const app = express();

const PORT = 5000;

app.get("/",(req, res) => {
    res.status(200).json({
        massage: "Hello Word",
    });
});

//route / path
app.use("*",(req, res) => {
    res.status(404).json ({
        message: "not found",
    });
});

// Start the server
app.listen(PORT, () => {
    console.log('server started, listening on port ${PORT}');
});