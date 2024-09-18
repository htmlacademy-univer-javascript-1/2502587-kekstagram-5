function checkLengthString(string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrom(string) {
  let stringWithoutSpaces = string.replaceAll(' ', '');
  let modifiedString = stringWithoutSpaces.toLowerCase();
  let newString = '';

  for (let i = modifiedString.length - 1; i >= 0; i--) {
      newString += modifiedString[i];
  }

  return modifiedString === newString;
}

function getNumber(data) {
  let string = String(data);
  let number = '';

  for (let i = 0; i < string.length; i++) {
      if (!Number.isNaN(parseInt(string[i]))) {
          number += string[i];
      }
  }

  return parseInt(number);
}
