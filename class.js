// class student{
//     name = "farhan"
//     roll = "15"
// }

// const student1 = new student();
// console.log(student1);

class Student{
    name;
    roll;
    constructor(name,roll){
        this.name = name
        this.roll = roll
    }
    showDetails(){
console.log(`My name is ${this.name}. My roll is ${this.roll}`);

    }
}

const student1 = new Student("farhan", 15)
student1.showDetails()
