// import PatientController
const PatientController = require("../controllers/PatientController.js");


// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express"); 
});

// Membuat routing patient
router.get("/patients", PatientController.index);

router.post("/patients", PatientController.store);

router.put("/patients/:id", PatientController.update);

router.get("/patients/:id", PatientController.find);

router.get("/patients_search/:name", PatientController.search_name);

router.get("/positive", PatientController.positive_p);

router.get("/negative", PatientController.negative_p);

router.get("/dead", PatientController.dead_p);

router.delete("/patients/:id", PatientController.destroy);


// export router
module.exports = router;
