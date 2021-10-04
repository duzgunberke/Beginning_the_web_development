"use strict";

const Zeyno={
    fullName:'Zeynep Sevcan',
    mass:46,
    height:1.63,
    calBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
};

const Berke={
    fullName:'Berke Duzgun',
    mass:70,
    height:1.70,
    calBMI:function(){
        this.bmi=this.mass/this.height**2;
        return this.bmi;
    }
};

Zeyno.calBMI();
Berke.calBMI();

console.log(Zeyno.bmi);
console.log(Berke.bmi);