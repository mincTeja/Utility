const readLineSync = require('readline-sync');

function getPoundToKgConversion(enteredValue){
  let convertedNumber = enteredValue * 0.45359237;
  return convertedNumber;
}

function getFarhenheitToCelsiusConversion(enteredValue){
  let convertedNumber = (enteredValue - 32)/1.8;
  return convertedNumber;
}

function poundToKg(){
  let enteredValue = readLineSync.question("Enter the pounds to be converted : ");
  const convertedNumber = getPoundToKgConversion(Number(enteredValue));
  console.log("Converted weight to KG : "+convertedNumber);
}

function fahrenheitToCelsius(){
  let enteredValue = readLineSync.question("Enter the fahrenheit to be converted : ");
  const convertedNumber = getFarhenheitToCelsiusConversion(Number(enteredValue));
  console.log("Converted temperature to Celsius : "+convertedNumber);
}

function unitConverter(){
  console.clear();
  const rgbHexConvertionOptions=`Welcome to Unit converter convertion. Please select the utility:\n
  1. Pounds to KG\n
  2. Fahrenheit to Celsius\n
  `;
  let rgbHexConvertionOptionSelected=readLineSync.question(rgbHexConvertionOptions);
  console.clear();
  switch(parseInt(rgbHexConvertionOptionSelected)){
    case 1:
      poundToKg();
      break;
    case 2:
      fahrenheitToCelsius();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  unitConverter
};