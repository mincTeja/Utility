const readLineSync = require('readline-sync');
const numberSystemConverterUtility = require('./NumberSystemConverter');

function getRgbToHexConvertedString(rgbValues){
  let convertedValue="";
  for(let i=0;i<rgbValues.length;++i){
    convertedValue+=numberSystemConverterUtility.getConvertedNumber(rgbValues[i],10,16);
  }
  return convertedValue;
}

function rgbToHex(){
  const rgbValues = []
  rgbValues.push(readLineSync.question("Enter Red Value : \n"));
  rgbValues.push(readLineSync.question("Enter blue Value : \n"));
  rgbValues.push(readLineSync.question("Enter green Value : \n"));
  
  const hexValue = getRgbToHexConvertedString(rgbValues);
  console.log(`Converted Hex Value : #${hexValue}`);

}

function getHexToRgbConvertedObject(hexValue){
  let hexValuePairs = hexValue.match(/.{1,2}/g);
  let red = numberSystemConverterUtility.getConvertedNumber(hexValuePairs[0],16,10);
  let blue = numberSystemConverterUtility.getConvertedNumber(hexValuePairs[1],16,10);
  let green = numberSystemConverterUtility.getConvertedNumber(hexValuePairs[2],16,10);
  const rgbValues = {
    Red : red,
    Blue : blue,
    Green : green
  };
  return rgbValues;
}

function hexToRgb(){
  const hex = readLineSync.question("Enter Hex Value : ");
  const rgbValues = getHexToRgbConvertedObject(hex.substring(1,hex.length));
  console.log("Converted RGB values : ");
  console.log(rgbValues);

}


function rgbHexConverter(){
  console.clear();
  const rgbHexConvertionOptions=`Welcome to RGB<==>Hex convertion. Please select the utility:\n
  1. RGB to Hex\n
  2. Hex to RGB\n
  `;
  let rgbHexConvertionOptionSelected=readLineSync.question(rgbHexConvertionOptions);
  console.clear();
  switch(parseInt(rgbHexConvertionOptionSelected)){
    case 1:
      rgbToHex();
      break;
    case 2:
      hexToRgb();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  rgbHexConverter
};