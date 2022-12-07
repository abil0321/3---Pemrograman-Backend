// const persiapan = () => {
//     setTimeout(function() {
//         console.log("Persiapan");
//     }, 3000);
// };

// const rebusAir = () => {
//     setTimeout(function() {
//         console.log("Rebus Air");
//     }, 7000);
// };

// const masak = () => {
//     setTimeout(function() {
//         console.log("Memasak Mie");
//         console.log("Selesai");
//     }, 5000);
// };

// const main = () => {
//     persiapan();
//     rebusAir();
//     masak();
// };

// main();

// =======================================================================

// =-- Async Await --=

const persiapan = () => {
    
        console.log("Persiapan");
    
};

const rebusAir = () => {
    
        console.log("Rebus Air");
    
};

const masak = () => {
     
        console.log("Memasak Mie");
        console.log("Selesai");
};

const main = () => {

    setTimeout(function() {
        persiapan();
        
        setTimeout(function() {
            rebusAir();

            setTimeout(function() {
                masak();

            }, 5000); 
        }, 7000);
    }, 3000);

};

main();

// =================================================================


// =========================================================


