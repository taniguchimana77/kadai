const moduleA = require("./module-a.js")
const moduleB = require("./module-b.js")
const fs = require("fs")

moduleA()
console.log(moduleB)
fs.writeFileSync("./kadai-09/hello.text","こんにちは")
