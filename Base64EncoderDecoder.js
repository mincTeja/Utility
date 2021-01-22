const readLineSync = require('readline-sync');
function encodeString(stringToBeEncoded){
  const base64EncodedString = Buffer.from(stringToBeEncoded).toString('base64');
  return base64EncodedString;
}
function decodeString(stringToBeDecoded){
  const base64DecodedString = Buffer.from(stringToBeDecoded, 'base64').toString('ascii');
  return base64DecodedString;
}

function base64Encoder(){
 const stringToBeEncoded=readLineSync.question('Enter the string to be encoded : ');
  const encodedString = encodeString(stringToBeEncoded);
  console.log("Please find the encoded string : "+encodedString);
}
function base64Decoder(){
  const stringToBeDecoded=readLineSync.question('Enter the string to be decoded : ');
      const decodedString = decodeString(stringToBeDecoded);
      console.log("Please find the decoded string : "+decodedString);
}
function base64EncoderDecoder(){
  console.clear();
  const base64EnDeOptions=`Welcome to Base64 Encoder/Decoder. Please select the utility:\n
  1. Base64 Encoder\n
  2. Base64 Decoder\n
  `;
  let urlEnDeOptionSelected=readLineSync.question(base64EnDeOptions);
  console.clear();
  switch(parseInt(urlEnDeOptionSelected)){
    case 1:
      base64Encoder();
      break;
    case 2:
      base64Decoder();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  base64EncoderDecoder
};