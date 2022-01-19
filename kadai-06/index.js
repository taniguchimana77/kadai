const fs = require("fs")
const date = fs.readFileSync("./kadai-06/date.json").toString("utf-8")
try{
    const obj = JSON.parse(date)
    obj.updateAt = Date()
    obj.count = obj.count + 1
    fs.writeFileSync("./kadai-06/date.json",JSON.stringify(obj))
    console.log("正常に終了しました")
    process.exit(0)
} catch (error){
    console.log("不正なJSONフォーマットです")
    process.exit(1)
}