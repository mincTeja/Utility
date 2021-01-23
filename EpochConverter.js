const readLineSync = require('readline-sync');

function epochToHumanDate(unixTimeStamp){
  const date = new Date(unixTimeStamp);
  console.log(date);
  return date;
}

function toHumanDate(){
  const unixTimeStamp=readLineSync.question("Enter the unix time stamp : ");
  const conversionToHumanDate = epochToHumanDate(parseInt(unixTimeStamp));
  const convertedHumanDate = {
    year:conversionToHumanDate.getFullYear(),
    month:conversionToHumanDate.getMonth()+1,
    date:conversionToHumanDate.getDate(),
    hours:conversionToHumanDate.getHours(),
    minutes:conversionToHumanDate.getMinutes(),
    seconds:conversionToHumanDate.getSeconds()
  };
  console.log("Please find the human date:");
  console.log(convertedHumanDate);
}

function humanDateToEpoch(enteredHumanDate){
  let enteredHumanDateString = `enteredHumanDate.year/enteredHumanDate.month/enteredHumanDate.date enteredHumanDate.hours:enteredHumanDate.minutes:enteredHumanDate.seconds`;
  return Date.parse(new Date(enteredHumanDateString));
}

function toEpoch(){
 
  const year=readLineSync.question("Enter the year : ");
  const month=readLineSync.question("Enter the month : ");
  const date=readLineSync.question("Enter the date : ");
  const hours=readLineSync.question("Enter the hours : ");
  const minutes=readLineSync.question("Enter the minutes : ");
  const seconds=readLineSync.question("Enter the seconds : ");
  enteredHumanDate={
    year,
    month,
    date,
    hours,
    minutes,
    seconds
  };
  const conversionToHumanDate = humanDateToEpoch(enteredHumanDate);
  console.log("\nEpoch time of entered human date : "+conversionToHumanDate)
}

function epochConverter(){
  console.clear();
  const epochConvertionOptions=`Welcome to Base64 Epoch convertion. Please select the utility:\n
  1. Epoch To Human Date\n
  2. Human Date to Epoch\n
  `;
  let epochConvertionOptionSelected=readLineSync.question(epochConvertionOptions);
  console.clear();
  switch(parseInt(epochConvertionOptionSelected)){
    case 1:
      toHumanDate();
      break;
    case 2:
      toEpoch();
      break;
    default:
      console.log("Hope i will be able to help you in future.");
  }
}

module.exports={
  epochConverter
};