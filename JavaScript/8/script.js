let friens = ["Berke","İrem","Beyza"];
friens.push("Ezgi"); //Yeni eleman ekliyor
console.log(friens);

friens.unshift("Jale"); //Başına ekliyor
console.log(friens);

friens.pop(); //son elamanı kaldırır
const poppedItem=friens.pop();
console.log(poppedItem);
console.log(friens);

friens.shift();//baştaki elemanı sıler
console.log(friens);

console.log(friens.indexOf("İrem")); //Dizide kacıncı sıreada oldugunu

console.log(friens.includes("Berke"));
console.log(friens.includes("Zeynep"));