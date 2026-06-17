function convertToRoman(num) {
  if (num === 0) return "";

  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  const roman = [
    obj[0],           // M, 1000
    ['CM', 900],
    obj[1],           // D, 500
    ['CD', 400],
    obj[2],           // C, 100
    ['XC', 90],
    obj[3],           // L, 50
    ['XL', 40],
    obj[4],           // X, 10
    ['IX', 9],
    obj[5],           // V, 5
    ['IV', 4],
    obj[6]            // I, 1
  ];

  let result = '';

  for (const [symbol, value] of roman) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

module.exports = convertToRoman;