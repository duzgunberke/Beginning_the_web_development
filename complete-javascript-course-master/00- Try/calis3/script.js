'use strict'

// let yigit={
//     name:'yigit',
//     yearOfBirth:2010,
//     job:'Student'
// }

let Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
    
        return 2020-this.yearOfBirth;
    
}

    let yigit=new Person('yigit',2010,'Student');
    console.log(yigit.job);
    console.log(yigit.calculateAge());