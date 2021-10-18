'use strict'

function Employee(name,salary){
    if(!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    var self=this;
    self.name=name;
    self.salary=salary;
}

Employee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1;
    var tax,total;
    total=this.salary*month;

    if(total<=20000){
        tax=total*0.2;
    }
    else if(total>20000){
        tax=total*0.25;
    }
    else{
        tax=total*0.3;
    }

    return {
        tax:tax,
        paid:total-tax
    }
}

var em1=new Employee('Berke',4000);
console.log(em1);
console.log(em1.calculateSalary());