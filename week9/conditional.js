const nilai = 90;
let grade = "";

if (nilai > 90) {
    grade = "A";
}else if (nilai > 80) {
    grade = "B";
}else {
    grade = "C";
}

console.log(`Grade anda: ${grade}`);

// ==================================================

const age = 22;

age > 21 ? console.log("SudaH Dewasa") : console.log("Belum Dewasa");