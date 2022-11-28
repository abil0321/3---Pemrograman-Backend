const {index, store, update, destroy} = require("./FruitsController.js");

const main = () => {
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0);
};

main();