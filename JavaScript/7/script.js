'use strict';

const calcAverage=(a,b,c)=>(a+b+c)/3;

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner=function(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolhins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`Koala win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log("No team win");
    }
}

checkWinner(scoreDolphins,scoreKoalas); 