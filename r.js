class person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    sleep()
    {
        console.log(`Sleeping now ${this.name}`)
    }
    eat(){
        console.log(`i want to eat Khejur ${this.name}`)
    }
}
const kodom = new person("Rahat",19)
console.log(kodom);
kodom.sleep()
kodom.eat()
