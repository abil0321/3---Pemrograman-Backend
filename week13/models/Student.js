const { resolve } = require("path");
const db = require("../config/database.js");

class Student {

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
    static all() {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students";

            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    // =================================================================================================

    // static create(ar_data){
    //     return new Promise((resolve, reject) => {
    //         const query = "insert into students (name, nim, email, jurusan) values(?)";

    //         db.query(query, [ar_data], (err, results) => {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(results);
    //             }
    //         });
    //     });
    // } 

    // --------------------------------------------------------------------------------------------

    // bisa !!
    // static create(req) {
    //     return new Promise((resolve, reject) => {
    //         const data = [...Object.values(req), new Date(), new Date()];
    //         const query = "INSERT INTO students (name, nim, email, jurusan, created_at, updated_at) VALUES (?)";

    //         db.query(query, [data], (err, results) => {
    //             if (err) throw err;
    //             const query = `SELECT * FROM students WHERE id = ${results.insertId}`;
    //             db.query(query, (err, results) => {
    //                 resolve(results);
    //             });
    //         });

    //     });
    // }

    // --------------------------------------------------------------------------------------------

    static async create(data, callback){
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO students SET ?, created_at=?, updated_at=?";
            db.query(sql, [data, new Date(), new Date()], (err, results) =>{
                resolve(results.insertId); 
            })
        })

        // return new Promise((resolve, reject) => {
        //     const sql = "SELECT * FROM students WHERE id = ?";
        //     db.query(sql, id, (err, results) => {
        //         resolve(results)
        //     })
        // })
        const student = this.find(id);
        return student;
    }

    // =======================================================================================================================

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students where id = ?";

            db.query(sql, id, (err, results) => {
                const [student] = results;
                resolve(student);
            });
        });
    }
    
    static async update(id, data, timeup){
        await new Promise((resolve, reject) => {
            const sql = `UPDATE students SET ?, created_at=?, updated_at=? WHERE id = ?`;
            db.query(sql, [data, new Date(), new Date(), id], (err, results) => {
                resolve(results);

            })
            console.log(data);
        })
        const student = await this.find(id);
        return student;
    }

    
    static delete(id){
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            })
        })
    }

    
}

module.exports = Student;