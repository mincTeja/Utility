const readLineSync = require('readline-sync');

function binaryToDecimalConversion(numberToBeConverted){
  let convertedNumber=0,conversionMultiplier=1;
  console.log(typeof numberToBeConverted);
  while(numberToBeConverted){
    let remd=numberToBeConverted%10;
    convertedNumber+=(remd*conversionMultiplier);
    numberToBeConverted/=2;
    conversionMultiplier*=2;
    console.log("remd : "+remd)
    console.log("converted number:" + convertedNumber)
  }
  console.log(numberToBeConverted);
  console.log(convertedNumber)
  return convertedNumber
}

function binaryToDecimal(){
  const numberToBeConverted=readLineSync.question('Enter binary number to be converted : ');
  const convertedDecimal=binaryToDecimalConversion(parseInt(numberToBeConverted));
  console.log("Please find the converted decimal number : "+convertedDecimal)
}

function numberSystemConverter(){
  console.clear();
  const numberSystemConverterOptions=`Welcome to Number 
  System Converter. Please select the utility:\n
  1. Binary to Decimal\n
  2. Binary to Hex\n
  3. Binary to Octal\n
  4. Decimal to Binary\n
  5. Decimal to Hex\n
  6. Decimal to Octal\n
  7. Hex to Decimal\n
  8. Hex to Binary\n
  9. Hex to Octal\n
  10. Octal to Decimal\n
  11. Octal to Binary\n
  12. Octal to Hex\n
  `;
  let numberConverterOptionSelected=readLineSync.question(numberSystemConverterOptions);
  console.clear();
  switch(parseInt(numberConverterOptionSelected)){
    case 1:
      binaryToDecimal();
      break;
    case 7:
      hexToDecimal();
      break;
    case 10:
      octalToDecimal();
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  numberSystemConverter
};