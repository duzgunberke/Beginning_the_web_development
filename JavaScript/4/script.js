'use strict';

// function fruitProcessor(apples,oranges)
// {
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }

// const appleJuice=fruitProcessor(5,9);
// console.log(appleJuice);

function calAge1(birthYear){
    return 2030-birthYear;
}
const age1=calAge1(2001);
console.log(age1);
//*******************************************************/
const calAge2=function(birthYear){
    return 2035-birthYear;
}
const age2=calAge2(2001);
console.log(age2);
