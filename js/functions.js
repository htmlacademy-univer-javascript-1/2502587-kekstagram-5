function checkLengthString(string, maxLength) {
  return string.length <= maxLength;
}

checkLengthString('проверяемая строка', 20); // true
checkLengthString('проверяемая строка', 18); // true
checkLengthString('проверяемая строка', 10); // false

function isPalindrom(string) {
  const modifiedString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = modifiedString.length - 1; i >= 0; i--) {
    newString += modifiedString[i];
  }

  return modifiedString === newString;
}

isPalindrom('топот'); // true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс');  // false
isPalindrom('Лёша на полке клопа нашёл '); // true

function getNumber(data) {
  const string = String(data);
  let number = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i]), 10)) {
      number += string[i];
    }
  }

  return parseInt(number);
}

getNumber('2023 год');            // 2023
getNumber('ECMAScript 2022');     // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007');           // 7
getNumber('а я томат');           // NaN
getNumber(2023); // 2023
getNumber(-1);   // 1
getNumber(1.5);  // 15



