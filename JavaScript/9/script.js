const  calTip=function(Berke){
    return Berke >=50 && Berke<=300 ? Berke*0.15:Berke*0.2
}

const berkes=[125,555,44];
const tips=[calTip(berkes[0]),calTip(berkes[1]),calTip(berkes[2])];
const totals=[berkes[0]+tips[0],berkes[1]+tips[1],berkes[2]+tips[2]];
console.log(berkes,tips,totals);
