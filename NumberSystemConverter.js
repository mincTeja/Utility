const readLineSync = require('readline-sync');

function getNumberToBeConverted(numberSystem=""){
  const numberToBeConverted=readLineSync.question('Enter ' +numberSystem+' number to be converted : ');
  return numberToBeConverted;
}

function displayConvertedNumber(convertedNumber,numberSystem=""){
  console.log("Please find the converted "+ numberSystem +" number : "+convertedNumber);
}


function getConvertedNumber(numberToBeConverted,fromNumberSytem,toNumberSystem=10){
  // let convertedNumber=0,conversionMultiplier=1;
  // let index=numberToBeConverted.length-1;
  // while(index>=0){
  //   let remd=parseInt(numberToBeConverted[index]);
  //   convertedNumber+=(remd*conversionMultiplier);
  //   conversionMultiplier*=fromNumberSytem;
  //   index--;
  // }
  let convertedNumber=parseInt(numberToBeConverted, fromNumberSytem).toString(toNumberSystem);
  return convertedNumber;
}


function binaryToDecimal(){
  const numberToBeConverted=getNumberToBeConverted("binary");
  let convertedNumber=getConvertedNumber(numberToBeConverted,2);
  displayConvertedNumber(convertedNumber,"decimal");
}

function binaryToHex(){
  const numberToBeConverted=getNumberToBeConverted("binary");
  let convertedNumber=getConvertedNumber(numberToBeConverted,2,16);
  displayConvertedNumber(convertedNumber,"hex");
}

function binaryToOctal(){
  const numberToBeConverted=getNumberToBeConverted("binary");
  let convertedNumber=getConvertedNumber(numberToBeConverted,2,8);
  displayConvertedNumber(convertedNumber,"octal");
}

function decimalToBinary(){
  const numberToBeConverted=getNumberToBeConverted("decimal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,10,2);
  displayConvertedNumber(convertedNumber,"binary");
}

function decimalToHex(){
  const numberToBeConverted=getNumberToBeConverted("decimal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,10,16);
  displayConvertedNumber(convertedNumber,"hex");
}

function decimalToOctal(){
  const numberToBeConverted=getNumberToBeConverted("decimal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,10,8);
  displayConvertedNumber(convertedNumber,"octal");
}

function hexToDecimal(){
  const numberToBeConverted=getNumberToBeConverted("hex");
  let convertedNumber=getConvertedNumber(numberToBeConverted,16,10);
  displayConvertedNumber(convertedNumber,"decimal");
}

function hexToOctal(){
  const numberToBeConverted=getNumberToBeConverted("hex");
  let convertedNumber=getConvertedNumber(numberToBeConverted,16,8);
  displayConvertedNumber(convertedNumber,"octal");
}

function hexToBinary(){
  const numberToBeConverted=getNumberToBeConverted("hex");
  let convertedNumber=getConvertedNumber(numberToBeConverted,16,2);
  displayConvertedNumber(convertedNumber,"binary");
}

function octalToDecimal(){
  const numberToBeConverted=getNumberToBeConverted("octal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,8,10);
  displayConvertedNumber(convertedNumber,"decimal");
}

function octalToBinary(){
  const numberToBeConverted=getNumberToBeConverted("octal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,8,2);
  displayConvertedNumber(convertedNumber,"binary");
}

function octalToHex(){
  const numberToBeConverted=getNumberToBeConverted("octal");
  let convertedNumber=getConvertedNumber(numberToBeConverted,8,16);
  displayConvertedNumber(convertedNumber,"hex");
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
    
    case 2:
      binaryToHex();
      break;

    case 3:
      binaryToOctal();
      break;

    case 4:
      decimalToBinary();
      break;
    
    case 5:
      decimalToHex();
      break;

    case 6:
      decimalToOctal();
      break;

    case 7:
      hexToDecimal();
      break;
    
    case 8:
      hexToBinary();
      break;

    case 9:
      hexToOctal();
      break;

    case 10:
      octalToDecimal();
      break;

    case 11:
      octalToBinary();
      break;

    case 12:
      octalToHex();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  numberSystemConverter
};