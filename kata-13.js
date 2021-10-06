 //create three arrays to hold the human readable months and dates
 const MONTH = ['N/A', 'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const DATE = ['N/A', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th',
  '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

const talkingCalendar = function (date) {
  //split the date into an array and extract the year, month and date
  let dateArray = date.split('/');
  let calYear = dateArray[0];
  let calMonth = dateArray[1];
  let calDate = dateArray[2];

  //convert the string month and date to numbers
  calMonth = parseInt(calMonth);
  calDate = parseInt(calDate);

  return MONTH[calMonth] + ' ' + DATE[calDate] + ', ' + calYear;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));