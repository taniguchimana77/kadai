let sum1 =0
for (let i = 1; i <= 1000; i = i + 1){
    sum1 = sum1 + i
}
console.log(sum1)

let sum2 = 0
for(let i = 1; i <= 1000; i = i + 1){
    if(i % 3 === 1){
        console.log(i)
        sum2 = sum2 + i
    }
}
console.log(sum2)
