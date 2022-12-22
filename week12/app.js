// Import
const express = require("express");
const router = require("./routes/api.js");
// const { urlencoded } = require("express");

// Membuat Object
const app = express();

// Menggunakan Middleware
app.use(express.json());
app.use(express.urlencoded());

// app.get("/", (req, res) => {
//     res.send("Hello Dunia Express!");
// });

// // =======================================

// app.get("/students", (req, res) => {
//     res.send("Menampilkan Semua Student!");
// });

// app.post("/students", (req, res) => {
//     res.send("Menambahkan Student!");
// });

// app.put("/students/:id", (req, res) => {
//     const {id} = req.params;
//     res.send(`Mengedit Student ${id}`);
// });

// app.delete("/students/:id", (req, res) => {
//     const {id} = req.params;
//     res.send(`Menghapus Student ${id}`);
// });

// // =======================================



app.use(router);

// Mendefinisikan Port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));