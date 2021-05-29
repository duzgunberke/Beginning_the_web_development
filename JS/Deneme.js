var bugun=new Date();

console.log(bugun);
console.log(bugun.getMonth());
console.log(bugun.getFullYear());


var dtA=new Date('8/24/2009 14:25:10');
console.log(dtA);


var dtC=new Date('1/1/1990');
var dayOfMonth=dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);



var start=new Date('1/1/1990');
var end=new Date('1/1/1991');

var milisecond=end-start;
var saniye=milisecond/1000;
var dakika=saniye/60;
var saat=dakika/60;
var gun=saat/24;

console.log('milisecond :'+milisecond);
console.log('milisecond :'+saniye);
console.log('milisecond :'+dakika);
console.log('milisecond :'+saat);
console.log('milisecond :'+gun);


//yaş hesaplama

var birthday=new Date('8/1/1985');
ageDif=Date.now() - birthday.getTime();

var agedate=new Date(ageDif);

console.log(agedate.getFullYear()-1970);


