const Berke ={
    firstName:"Efe",
    lastName:"Duzgun",
    birthYear:2001,
    job:"Student",
    friends:["Zeynep","Sena","Enes"],
    hasDriveLicence:false,

    //calAge:function(birthYear){
    //    return 2037-birthYear;
    //}

    calAge:function(){
        this.age=2037-this.birthYear;
        return this.age;
    }
};

console.log(Berke.calAge());
console.log(Berke.age);
