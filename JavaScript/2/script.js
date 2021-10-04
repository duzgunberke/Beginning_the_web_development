const massBerke=70;
const heightBerke=1.70;
const massEfe=87;
const heightEfe=1.80;

const BMIBerke=massBerke/heightBerke**2;
const BMIEfe=massEfe/heightEfe**2;
const BerkeHigherBMI=BMIBerke>BMIEfe;

if(BMIBerke>BMIEfe)
{
    console.log(`Berke'nin BMI değeri ${BMIBerke},
    BMI degeri ${BMIEfe} olan Efe'den daha buyuk`);
}
else
{
    console.log(`Efe'nin BMI degerı ${BMIEfe},
BMI degeri ${BMIBerke} olan Berke'den daha buyuk`);
}