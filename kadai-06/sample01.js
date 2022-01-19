const cat ={
    name:"tama",
    age:5
}

console.log(cat)
const jsonstring = JSON.stringify(cat)
console.log(jsonstring + "aaaa")

const cat_parsed = JSON.parse(jsonstring)
console.log(cat_parsed)

