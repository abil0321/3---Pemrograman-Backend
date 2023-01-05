// import Model Patient
const Patient = require("../models/Patient");

// buat class PatientController
class PatientController {
  // buat fungsi

  // Promise + async await solution
  async index(req,res){
    // res.send("Menampilkan Semua patient!");
    const patients = await Patient.all();
   
    if (patients.length > 0) {
        const data = {
            message: "Menampilkan Semua patient!",
            data: patients
       }
    res.status(200).json(data);
    } else {
        const data = {
            message: "patient Not Found !"
       }
        res.status(200).json(data);
    }
}

async find(req,res){
  // res.send("Menampilkan Semua patient!");
  const {id} = req.params;

  const patients = await Patient.find(id);
  const data = {
          message: "Menampilkan patient by ID!",
          data: patients
     }
  res.json(data);
}

    // =================================================================

async store(req, res) {

  const {name, phone, address, status, in_date_at, out_date_at} = req.body;

  if (!name || !phone || !address || !status, !in_date_at, !out_date_at) {
      const data = {
          message: "Semua data harus di kirim!"
      };
      res.status(442).json(data);
  } 

  const patient = await Patient.create(req.body);

  const data = {
      message: "Menambahkan data patient",
      data: patient,
  };
  console.log(patient);
  // console.log(data);

  res.status(201).json(data);
}

    // =================================================================

    async update(req, res){
      const { id } = req.params;
      const patient = await Patient.find(id);

      
      if (patient) {
          const patient = await Patient.update(id, req.body);
          const data = {
              message: `Mengedit data patient`,
              data: patient
          }
          res.status(200).json(data);
      } else {
          const data = {
              message: `patient Not Found`,
          }
          res.status(404).json(data);
      }
  }

    // =================================================================

    async destroy(req, res){
      const { id } = req.params;
      const patient = await Patient.find(id);

      if (patient) {
          await Patient.delete(id);
          const data = {
              message: `Menghapus data patient`
          }
          res.status(200).json(data);

      } else {
          const data = {
              message: `patient Not Found`,
          }
          res.status(404).json(data);
      }
  }
    // =================================================================

    async show(req, res){
      const { id } = req.params;

      const patient = await Patient.find(id);

      if (patient) {
          const data = {
              message: `Menampilkan data patient`,
              data: patient
          }
          res.status(200).json(data); 
      } else {
          const data = {
              message: `patient Not Found`,
          }
          res.status(404).json(data);
      }
  }
    // =================================================================

    async search_name(req, res){

      const { name } = req.params;
      const patient = await Patient.search(name);

      if (patient) {
          const data = {
              message: `Menampilkan data patient`,
              data: patient
          }
          res.status(200).json(data); 
      } else {
          const data = {
              message: `patient Not Found yang ya`,
          }
          res.status(404).json(data);
      }
      console.log(patient);
  }

    // =================================================================
    async positive_p(req,res){
      // res.send("Menampilkan Semua patient!");
      const patients = await Patient.positive();
     
      if (patients.length > 0) {
          const data = {
              message: "Menampilkan Semua patient Positive!",
              data: patients
         }
      res.status(200).json(data);
      } else {
          const data = {
              message: "patient Not Found !"
         }
          res.status(200).json(data);
      }
  }

  async negative_p(req,res){
    // res.send("Menampilkan Semua patient!");
    const patients = await Patient.negative();
   
    if (patients.length > 0) {
        const data = {
            message: "Menampilkan Semua patient Negative!",
            data: patients
       }
    res.status(200).json(data);
    } else {
        const data = {
            message: "patient Not Found !"
       }
        res.status(200).json(data);
    }
}
    // =================================================================

}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
