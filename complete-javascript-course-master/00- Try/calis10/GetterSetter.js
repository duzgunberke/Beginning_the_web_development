// const person={
//     firstName:'Berke',
//     lastName:'Duzgun',
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set FullName(value){
//         const parts=value.split(' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// }

// person.firstName='Çınar MElikezade';
// console.log(person.fullName);
// console.log(person);

var num={
    min:0,
    max:100,
    checkNumericRange:function(value){
        if(typeof value !== 'number'){
            return false;
        }
        else{
            return value>=this.min&& value<=this.max;
        }
    }
}
console.log(num.checkNumericRange(20));
console.log(num.checkNumericRange(-50));

var num1={min:50,max:60};
console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange.call(num1,85));

var checkNumber=num.checkNumericRange.bind(num1);
console.log(checkNumber(56));