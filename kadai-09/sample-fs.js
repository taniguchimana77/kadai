const fs = require("fs")

fs.writeFileSync("./hello.txt","こんにちは")
const text = fs
 .readFileSync("./hello.txt")
 .toString("utf-8")
 
console.log(text)