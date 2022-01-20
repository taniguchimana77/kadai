//最もシンプルなクラス
class MyClass{}//クラスの定義
const instance = new MyClass()//クラスのインスタンス化
console.log(instance)


//コンストラクタを定義したクラス
class hello{   
    constructor(){
        console.log("Hello!")
    }
}
const hello =new hello()

//コンストラクタに引数を渡す
class Person{
    constructor(name){
        console.log(`hello,${name}!`)
    }
}
const person= new Person("田中")