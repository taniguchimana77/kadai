console.log("hello")
try{
    JSON.parse('{"a":123}')//エラー
    console.log("正しいJSONです。")
}catch (error) {
    //console.log(error)
    console.log("不正なJSONです")
}
console.log("Bye")