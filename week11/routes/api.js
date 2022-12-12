const express = require("express");

const StudentController = require("../controllers/StudentController.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello Dunia Express!");
});

// // =======================================

// router.get("/students", (req, res) => {
//     res.send("Menampilkan Semua Student!");
// });

// router.post("/students", (req, res) => {
//     res.send("Menambahkan Student!");
// });

// router.put("/students/:id", (req, res) => {
//     const {id} = req.params;
//     res.send(`Mengedit Student ${id}`);
// });

// router.delete("/students/:id", (req, res) => {
//     const {id} = req.params;
//     res.send(`Menghapus Student ${id}`);
// });

// // =======================================


router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

// =======================================

module.exports = router;