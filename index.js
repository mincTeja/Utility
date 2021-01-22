const readLineSync = require('readline-sync');
const urlEncoderDecoderUtility=require('./URLEncoderDecoder');
const base64EncoderDecoderUtility=require('./Base64EncoderDecoder');
const stringHashUtility=require('./StringHashing');
const epochConverterUtility=require('./EpochConverter');
const numberSystemConverterUtility=require('./NumberSystemConverter');

const utilityOptionsAvailable=`Hello Pal, I can help you with:\n
1. URL Encoder/Decoder\n
2. Base64 Encoding/Decoding\n
3. String hashing\n
4. Epoch Converters\n
5. Binary/Decimal/Hex/Octal Converters\n
6. RGB\n
7. Unit Converters\n
What shall i help you with? `;
let utilityOptionSelected=readLineSync.question(utilityOptionsAvailable);

switch(parseInt(utilityOptionSelected)){
  case 1:
    urlEncoderDecoderUtility.urlEncoderDecoder();
    break;
  case 2:
    base64EncoderDecoderUtility.base64EncoderDecoder();
    break;
  case 3:
    stringHashUtility.stringHash();
    break;
  case 4:
    epochConverterUtility.epochConverter();
    break;
  case 5:
    numberSystemConverterUtility.numberSystemConverter();
    break;
  case6:
    rgb();
    break;
  case7:
    unitConverter();
    break;
  default:
    console.log("Hope i will be able to solve your problem in future!")
}