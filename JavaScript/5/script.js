'use strict';


//Arrow function

const calAge3=birthYear=>2050-birthYear;
const age3=calAge3(2001);
console.log(age3);

const yearUntilRetiremnet=(birthYear,firstName)=>{
    const age=2037-birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetiremnet(2001,"Berke"));
console.log(yearUntilRetiremnet(2008,"Berkay"));