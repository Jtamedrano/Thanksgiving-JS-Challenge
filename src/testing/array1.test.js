const array1 = require("../arrays/array1");
const { alphaArr } = require("../data/arrayData");

test("Adds element to begging of array", () => {
  expect(array1.addToFront(alphaArr)).toBe([" ", ...alphaArr]);
});
