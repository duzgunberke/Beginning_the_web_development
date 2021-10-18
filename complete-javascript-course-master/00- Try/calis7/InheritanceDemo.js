'use strict'


//Person Constructor
function Person(name){
    this.name=name;
}

Person.prototype.Introduce=function(){
    console.log(`Hello my name is ${this.name}`)
}


//Teacher constructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
}

Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Teacher.prototype.teach=function(){
    console.log(`I teach ${this.branch}`);
}

//Student constructor
function Student(name,number){
    Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study=function(){
    console.log(`My student number is ${this.number} I have already study`);
}



//HEadmaster Constructor
function Headmaster(name,branch){
    Teacher.call(this,name,branch);
}
Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;

Headmaster.prototype.shareTask=function(){
    console.log('I have already shared all the work');
}


let person1=new Person('Sena');
person1.Introduce();

let teaceher1=new Teacher('Sadık','Yazılım');
teaceher1.Introduce();
teaceher1.teach();

let student1=new Student('Yigit',20020);
student1.Introduce();
student1.study();

let headmaster1=new Headmaster('Ahmet','Math');
headmaster1.Introduce(); //PErsom
headmaster1.teach(); //teavher
headmaster1.shareTask(); //Headmaster