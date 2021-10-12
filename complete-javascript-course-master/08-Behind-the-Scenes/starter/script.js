'use strict';
function calAge(birthYear){
    const age=2037-birthYear;
    
    function printAge(){
        const output=`You are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    return age;
}


const firstName='Berke';
calAge(1991);