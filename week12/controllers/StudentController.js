const Student = require("../models/Student.js");

class StudentController {
    // index(req,res){
    //     // res.send("Menampilkan Semua Student!");
    //     const students = Student.all();

    //     const data = {
    //         message: "Menampilkan Semua Student!",
    //         data: students
    //     }
    //     res.json(data);
    // }

    // -----------------------------------------------------------------

    // callback solution
    // index(req,res){
    //     // res.send("Menampilkan Semua Student!");
    //     const students = Student.all(function(students){
    //         const data = {
    //             message: "Menampilkan Semua Student!",
    //             data: students
    //         }
    //         res.json(data);
    //     });
    // }

    // -----------------------------------------------------------------

    // Promise + async await solution
    async index(req,res){
        // res.send("Menampilkan Semua Student!");
        const students = await Student.all();
        const data = {
                message: "Menampilkan Semua Student!",
                data: students
           }
        res.json(data);
        
    }

    // =================================================================

    async find(req,res){
        // res.send("Menampilkan Semua Student!");

        const {id} = req.params;

        const students = await Student.find(id);
        const data = {
                message: "Menampilkan Student by ID!",
                data: students
           }
        res.json(data);
        
    }

    // =================================================================


    // store(req,res){
    //     const { nama } = req.body;

    //     students.push(nama);
    //     // const datas = students.push(req.body);
    //     // res.send(`Menambahkan Student : ${nama}`);

    //     const data = {
    //         message: `Menambahkan Student : ${nama}`,
    //         data: students,
    //         // jumlah: datas
    //     }
    //     res.json(data);
    // }

    // ------------------------------------------------------------------

    async store(req,res){
        const { 
            name,
            nim,
            email,
            jurusan
        } = req.body;

        const ar_data = [name,nim,email,jurusan];

        const students = await Student.create(ar_data);

        const data = {
            message: `Menambahkan Student`,
            data: ar_data,
        }
        res.json(data);
    }


    // =================================================================

    update(req,res){
        const { id } = req.params;
        const { nama } = req.body;

        students[id] = nama;
        // students[id] = req.body;
        // res.send(`Mengedit Student ${id}, nama : ${nama}`);

        const data = {
            message: `Mengedit Student ${id}, nama : ${nama}`,
            data: students,
            // jumlah: students.length

        }
        res.json(data);
    }

    // =================================================================

    destroy(req,res){
        const { id } = req.params;
        // res.send(`Menghapus Student ${id}`);

        // const student = students.indexOf(students[id]);
        // if (student > -1) {
        //     students.splice(student, 1);
        // }

        students.splice(id, 1);

        const data = {
            message: `Menghapus Student ${id}`,
            data: students
        }
        res.json(data);
        
    }
}

const object = new StudentController();

module.exports = object;