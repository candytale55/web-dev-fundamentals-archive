function separateUnits(num) { 
    var number = num.toString().split('');
    var multiplier = 1;  

    for (var i = number.length - 1; i >= 0; i--) {
        number[i] *= multiplier;
        multiplier *= 10;
    }
    return number;
}
// console.log(separateUnits(12134));
// This function came from here: https://stackoverflow.com/questions/34110725/convert-number-to-tens-hundreds-thousands




function convertToRoman(num) {
  let numSplit = separateUnits(num); 
  // console.log(numSplit); // Testing 

  let romanNum = "";

for (let i=0; i<numSplit.length; i++){
  switch(numSplit[i]){
  case 3000:
    romanNum +="MMM";
    break;
  case 2000:
    romanNum +="MM";
    break;
  case 1000:
    romanNum +="M";
    break;  
  case 900:
    romanNum +="CM";
    break;
  case 800:
    romanNum +="DCCC";
    break;
  case 700:
    romanNum +="DCC";
    break;
  case 600:
    romanNum +="DC";
    break;
  case 500:
    romanNum +="D";
    break;
  case 400:
    romanNum +="CD";
    break;
  case 300:
    romanNum +="CCC";
    break;
  case 200:
    romanNum +="CC";
    break;
  case 100:
    romanNum +="C";
    break;
  case 90:
    romanNum +="XC";
    break;
  case 80:
    romanNum +="LXXX";
    break;
  case 70:
    romanNum +="LXX";
    break;
  case 60:
    romanNum +="LX";
    break;
  case 50:
    romanNum +="L";
    break;
  case 40:
    romanNum +="XL";
    break;
  case 30:
    romanNum +="XXX";
    break;
  case 20:
    romanNum +="XX";
    break;
  case 10:
    romanNum +="X";
    break;
  case 9:
    romanNum +="IX";
    break;
  case 8:
    romanNum +="VIII";
    break;
  case 7:
    romanNum +="VII";
    break;
  case 6:
    romanNum +="VI";
    break;
  case 5:
    romanNum +="V";
    break;
  case 4:
    romanNum +="IV";
    break;
  case 3:
    romanNum +="III";
    break;
  case 2:
    romanNum +="II";
    break;
  case 1:
    romanNum +="I";
    break;
}


}
return romanNum;
} // function


//console.log(convertToRoman(1));
//console.log(convertToRoman(2));
//console.log(convertToRoman(3));
//console.log(convertToRoman(4));
//console.log(convertToRoman(5));
//console.log(convertToRoman(7));
//console.log(convertToRoman(9));
//console.log(convertToRoman(12));
//console.log(convertToRoman(16));
//console.log(convertToRoman(29));
//console.log(convertToRoman(44));
//console.log(convertToRoman(45));
//console.log(convertToRoman(68));
//console.log(convertToRoman(83));
//console.log(convertToRoman(97));
//console.log(convertToRoman(99));
//console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
//console.log(convertToRoman(649));
//console.log(convertToRoman(798));
//console.log(convertToRoman(891));
//console.log(convertToRoman(1000));
//console.log(convertToRoman(1004));
//console.log(convertToRoman(1006));
//console.log(convertToRoman(1023));
//console.log(convertToRoman(2014));
//console.log(convertToRoman(3999));     





