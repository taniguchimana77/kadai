const  profile = {
    name:"タニグチ",
    age:"21",
    hobby:"読書",
    major:"文学"
}
const dictionary = {
    name: "名前",
    age: "年齢",
    hobby:"趣味",
    major:"専攻"
}

const keys = Object.keys(profile)
for (const key of keys){
    const value = profile[key]
    const key_in_japanese = dictionary[key]
    console.log(`私の${key}は${value}です。`)
}


