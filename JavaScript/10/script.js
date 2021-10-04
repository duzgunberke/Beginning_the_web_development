const Berke ={
    firstName:"Efe",
    lastName:"Duzgun",
    age:2021-2001,
    job:"Student",
    friends:["Zeynep","Sena","Enes"]
};

console.log(Berke);
console.log(Berke.lastName);

const nameKey="Name";
console.log(Berke['first'+nameKey]);
console.log(Berke['last'+nameKey]);

const interestedIn=prompt('What do you want to know about Berke? Chose between firstName,lastName,age,job and friends');

if(Berke[interestedIn]){
console.log(Berke[interestedIn]);
}
else{
   console.log("Wrong request!"); 
}

Berke.location="Canada";
Berke['Insta']="berke.dzgn";
console.log(Berke);
