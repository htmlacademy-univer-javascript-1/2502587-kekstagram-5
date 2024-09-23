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

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');

function getNumber(data) {
  const string = String(data);
  let number = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      number += string[i];
    }
  }

  return parseInt(number, 10);
}

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
