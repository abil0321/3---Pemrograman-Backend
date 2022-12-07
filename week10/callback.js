function formatName(name) {
    const result = name.toUpperCase();
    return result;
}

function getName(name, callFormatName) {
    const result = callFormatName(name);
    console.log(result);
}

// const formatName = (name) => name.toUpperCase();
// const getName = (name, callFormatName) => console.log(callFormatName(name));

getName("Muhammad Salsabil", formatName);