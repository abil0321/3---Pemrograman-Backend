// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  // buat fungsi
  static all() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM patients";

        db.query(query, (err, results) => {
            resolve(results);
        });
    });
}

static async find(id) {
  return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients where id = ?";

      db.query(sql, id, (err, results) => {
          // const [patient] = results;
          resolve(results);
      });
  });
}

  // ================================================================= 

static async create(data, callback){
  const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?, created_at=?, updated_at=?";
      db.query(sql, [data, new Date(), new Date()], (err, results) =>{
          resolve(results.insertId); 
      })
  })

  const patient = this.find(id);
  return patient;
}

    // ================================================================= 
    
    static async update(id, data, timeup){
      await new Promise((resolve, reject) => {
          const sql = `UPDATE patients SET ?, created_at=?, updated_at=? WHERE id = ?`;
          db.query(sql, [data, new Date(), new Date(), id], (err, results) => {
              resolve(results);

          })
          console.log(data);
      })
      const patient = await this.find(id);
      return patient;
  }

    // =================================================================

    static delete(id){
      return new Promise((resolve, reject) => {
          const sql = "DELETE FROM patients WHERE id = ?";
          db.query(sql, id, (err, results) => {
              resolve(results);
          })
      })
  }

    // =================================================================

    static async search(name) {
      return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM patients where name LIKE '%' ? '%'";
          console.log(name);
    
          db.query(sql, [name], (err, results) => {
              const [patient] = results;
              resolve(results);
          });
          console.log(sql);
      });
    }

  static positive() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM patients where status='positive'";

        db.query(query, (err, results) => {
            resolve(results);
        });
    });
}

static negative() {
  return new Promise((resolve, reject) => {
      const query = "SELECT * FROM patients where status='negative'";

      db.query(query, (err, results) => {
          resolve(results);
      });
  });
}

static dead() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM patients where status='dead'";
  
        db.query(query, (err, results) => {
            resolve(results);
        });
    });
  }

}

// export class Patient
module.exports = Patient;
