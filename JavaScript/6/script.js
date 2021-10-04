
calAge=function(birthYear){
    return 2037-birthYear;
}



const yearsUntilRetirement=function(birthYear,firstName)
{
    const age=calAge(birthYear);
    const retirement=65-age;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);    
        return retirement;
    }
    else{
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }


}

console.log(yearsUntilRetirement(2001,"Berke"));  
console.log(yearsUntilRetirement(1950,"İrem"));  