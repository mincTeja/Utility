const readLineSync = require('readline-sync');
const crypto = require('crypto');

function hashingString(algorithm,stringToBeHashed){
  
  const hashedString=crypto.createHash(algorithm).update(stringToBeHashed).digest('hex');
  return hashedString;
}

function hashString(algo){
   const stringToBeHashed=readLineSync.question('Enter the string to be Hashed : ');
  const stringHashed = hashingString(algo,stringToBeHashed);
  console.log("Please find the Hashed string : "+stringHashed);
}

function stringHash(){
  console.clear();
  const stringHashingOptions=`Welcome to String Hashing. Please select the utility:\n
  1. MD5\n
  2. SHA-1\n
  3. SHA-256\n
  4. SHA-512\n
  `;
  let stringHashingOptionSelected=readLineSync.question(stringHashingOptions);
  console.clear();
  switch(parseInt(stringHashingOptionSelected)){
    case 1:
      hashString("md5");
      break;
    case 2:
      hashString("sha1");
      break;
    case 3:
      hashString("sha256");
      break;
    case 4:
      
      hashString("sha512");
      break;

    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  stringHash
};