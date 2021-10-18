'use strict'

let person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

person.prototype.calculateAge=function(){
    return 2020-this.yearOfBirth;
}

let teacher=function(name,yearOfBirth,job,subject){
    person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}

//Inheritance prototype
teacher.prototype=Object.create(person.prototype);
//set teacher constructer
teacher.prototype.constructor=teacher;


let emel =new teacher('Emel',1999,'Teacher','Math');
console.log(emel);
console.log(emel.calculateAge());