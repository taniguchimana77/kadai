//静的メソッド

class Person{
    static hello(){
        console.log("人間です")
    }
    constructor(name){
        this.name = name
    }
    hello(){
        console.log(`${this.name}です`)
    }
}
const person = new Person("田中")
Person.hello()
person.hello()