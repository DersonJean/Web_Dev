const fs = require("fs");

fs.writeFile("message.txt", "Hello form Derson",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File content:", data);
    });
});


fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});
