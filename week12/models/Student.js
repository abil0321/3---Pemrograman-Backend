const { resolve } = require("path");
const db = require("../config/database.js");

class Student{

    // static all(){
    //     const query = "SELECT * FROM students";

    //     db.query(query, (err, results) => {
    //         return results;
    //     });
    // }

    // callback solution ==--------------------------------------
    // static all(callback){
    //     const query = "SELECT * FROM students";

    //     db.query(query, (err, results) => {
    //         callback(results);
    //     });
    // }

    // Promise + async await solution ==---------------------------------------
    static all(){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM students";

            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    // =================================================================================================

    // static create(ar_data){
    //     return new Promise((resolve, reject) => {
    //         // const data = [...Object.values(req), new Date(), new Date];
    //         // const query = "insert into students (name, nim, email, jurusan, created_at, updated_at) values(?)";
    //         const query = "insert into students (name, nim, email, jurusan) values(?)";

    //         db.query(query, [ar_data], (err, results) => {
    //             // if (err) throw err; 
    //             //     const query = `select * from students where id = ${results, insertId}`;
    //             //     db.query(query, (err, results) => {
    //             //         resolve(results);
    //             //     });
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(results);
    //             }
    //         });
    //     });
    // }

    // --------------------------------------------------------------------------------------------

    static create(req) {
        return new Promise((resolve, reject) => {
            const data = [...Object.values(req), new Date(), new Date()];
            const query = "INSERT INTO students (name, nim, email, jurusan, created_at, updated_at) VALUES (?)";
            db.query(query, [data], (err, results) => {
                if (err) throw err;
                const query = `SELECT * FROM students WHERE id = ${results.insertId}`;
                db.query(query, (err, results) => {
                    resolve(results);
                });
            });
        });
    }

    // =======================================================================================================================

    static find(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM students where id=?";

            db.query(query, [id], (err, results) => { 
                resolve(results);
            });
        });
    }
}

module.exports = Student;