const readLineSync = require('readline-sync');
function encodeURL(urlToBeEncoded){
  return encodeURIComponent(urlToBeEncoded);
}
function decodeURL(urlToBeEncoded){
  return decodeURIComponent(urlToBeEncoded);
}

function urlEncoder(){
 const urlToBeEncoded=readLineSync.question('Enter the URL to be encoded : ');
  const encodedURL = encodeURL(urlToBeEncoded);
  console.log("Please find the encoded URL : "+encodedURL);
}
function urlDecoder(){
  const urlToBeDecoded=readLineSync.question('Enter the URL to be decoded : ');
      const decodedURL = decodeURL(urlToBeDecoded);
      console.log("Please find the decoded URL : "+decodedURL);
}
function urlEncoderDecoder(){
  console.clear();
  const urlEnDeOptions=`Welcome to URL Encoder/Decoder. Please select the utility:\n
  1. Encoder\n
  2. Decoder\n
  `;
  let urlEnDeOptionSelected=readLineSync.question(urlEnDeOptions);
  console.clear();
  switch(parseInt(urlEnDeOptionSelected)){
    case 1:
      urlEncoder();
      break;
    case 2:
      urlDecoder();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  urlEncoderDecoder
};