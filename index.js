function capitalization(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function strReverse(string) {
  return string.split("").reverse().join("");
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
    min: arr.sort((a, b) => a - b)[0],
    max: arr.sort((a, b) => b - a)[0],
    length: arr.length,
  };
}

function ceasarCipher(str, key) {
  const alphabet = [];
  const cipherAlphabet = [];
  const punctuation = [
    " ",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    ",",
    ".",
    "/",
    "?",
    "_",
    "-",
    "+",
    "=",
  ];
  const result = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(97 + i));
  }

  if (key) {
    cipherAlphabet.push(...alphabet.slice(key).concat(alphabet.slice(0, key)));
  }

  for (const char of str) {
    if (punctuation.includes(char)) {
      result.push(char);
    } else {
      const index = alphabet.indexOf(char.toLowerCase());
      if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
        result.push(cipherAlphabet[index].toUpperCase());
      } else {
        result.push(cipherAlphabet[index]);
      }
    }
  }
  return result.join("");
}

class calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return (a < 0 && (a == 0 || b == 0)) || (b < 0 && (a == 0 || b == 0))
      ? 0
      : a * b;
  }

  static divide(a, b) {
    return b === 0 ? undefined : a / b;
  }
}

module.exports = {
  capitalization,
  strReverse,
  analyzeArray,
  ceasarCipher,
  calculator,
};
// caesarCipher("Goodmorning, sir!", 3);
