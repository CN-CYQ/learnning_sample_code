let man = {
    name: '张三',
    age: 18,
    sex: '男',
    sayName() {
        console.log(this.name)
    }
} 
console.log(man.sayName())