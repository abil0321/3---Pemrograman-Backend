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
            message: "Get All Resource",
            data: patients
       }
    res.status(200).json(data);
    } else {
        const data = {
            message: "Data is empty"
       }
        res.status(200).json(data);
    }
}

async find(req,res){
  // res.send("Menampilkan Semua patient!");
  const {id} = req.params;

  const patients = await Patient.find(id);
  const data = {
          message: "Get Detail Resource",
          data: patients
     }
  res.json(data);
}

    // =================================================================

async store(req, res) {

  const {name, phone, address, status, in_date_at, out_date_at} = req.body;

  if (!name || !phone || !address || !status, !in_date_at, !out_date_at) {
      const data = {
          message: "All fields must be filled correctly"
      };
      res.status(442).json(data);
  } 

  const patient = await Patient.create(req.body);

  const data = {
      message: "Resource is added successfully",
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
              message: `Resource is update successfully`,
              data: patient
          }
          res.status(200).json(data);
      } else {
          const data = {
              message: `Resource not found`,
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
              message: `Resource is delete successfully`
          }
          res.status(200).json(data);

      } else {
          const data = {
              message: `Resource not found`,
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
              message: `Get Detail Resource`,
              data: patient
          }
          res.status(200).json(data); 
      } else {
          const data = {
              message: `Resource not found`,
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
              message: `Get searched resource`,
              data: patient
          }
          res.status(200).json(data); 
      } else {
          const data = {
              message: `Resource not found`,
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
              message: "Get positive resource",
              data: patients
         }
        res.status(200).json(data);
      
      } else {
          const data = {
              message: "patient Not Found !"
         }
          res.status(404).json(data);
      }
  }

  async negative_p(req,res){
    // res.send("Menampilkan Semua patient!");
    const patients = await Patient.negative();
   
    if (patients.length > 0) {
        const data = {
            message: "Get recovered resource",
            data: patients
       }
    res.status(200).json(data);
    } else {
        const data = {
            message: "patient Not Found !"
       }
        res.status(404).json(data);
    }
}
    // =================================================================

    async dead_p(req,res){
        // res.send("Menampilkan Semua patient!");
        const patients = await Patient.dead();
       
        if (patients.length > 0) {
            const data = {
                message: "Get dead resource",
                data: patients
           }
        res.status(200).json(data);
        } else {
            const data = {
                message: "patient Not Found !"
           }
            res.status(404).json(data);
        }
    }

}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object; 