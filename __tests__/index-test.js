const {
  capitalization,
  strReverse,
  analyzeArray,
  ceasarCipher,
  calculator,
} = require("../index");

describe("Main", () => {
  it("should capitalize", () => {
    expect(capitalization("athens")).toMatch(/^[A-Z]/);
  });

  it("should reverse", () => {
    expect(strReverse("stelios")).toMatch(/soilets/);
  });
});

describe("AnalyzeArray", () => {
  it("should get average", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
  });

  it("should get min", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
  });

  it("should get max", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
  });

  it("should get length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
  });
});

describe("Ceasar's cipher", () => {
  it.each([
    ["Hello", 3, "Khoor"],
    ["Goodmorning, sir!", 3, "Jrrgpruqlqj, vlu!"],
    ["_Sunny day & today", 5, "_Xzssd ifd & ytifd"],
  ])("(%s)", (str, key, expected) => {
    expect(ceasarCipher(str, key)).toBe(expected);
  });
});

describe("Calculator", () => {
  it.each([
    [1, 2, 3],
    [2, 4, 6],
  ])(".add(%i, %i)", (a, b, expected) => {
    expect(calculator.add(a, b)).toBe(expected);
  });

  it.each([
    [1, 2, -1],
    [4, 2, 2],
    [2, 2, 0],
  ])(".subtract(%i, %i)", (a, b, expected) => {
    expect(calculator.subtract(a, b)).toBe(expected);
  });

  it.each([
    [1, 2, 2],
    [4, 2, 8],
    [-2, 0, 0],
  ])(".multiply(%i, %i)", (a, b, expected) => {
    expect(calculator.multiply(a, b)).toBe(expected);
  });

  it.each([
    [1, 2, 0.5],
    [4, 2, 2],
    [2, 0, undefined],
  ])(".divide(%i, %i)", (a, b, expected) => {
    expect(calculator.divide(a, b)).toBe(expected);
  });
});
