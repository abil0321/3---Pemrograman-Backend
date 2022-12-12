const students = require("../data/students");

class StudentController {
    index(req,res){
        // res.send("Menampilkan Semua Student!");

        const data = {
            message: "Menampilkan Semua Student!",
            data: students
        }
        res.json(data);
    }

    store(req,res){
        const { nama } = req.body;

        students.push(nama);
        // const datas = students.push(req.body);
        // res.send(`Menambahkan Student : ${nama}`);

        const data = {
            message: `Menambahkan Student : ${nama}`,
            data: students,
            // jumlah: datas
        }
        res.json(data);
    }

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