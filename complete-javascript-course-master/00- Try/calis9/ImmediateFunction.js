
//Sadece başta bir kez calısacak fonksıyon tanımlaması


(function(){
    var days=['Sunday','monday','Tuesday','Wednasday','Thursdsay','Friday','saturday'];
    var today=new Date();
    var msg='Welcome. Today is'+days[today.getDay()];
    console.log(msg);
}());