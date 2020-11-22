const {
  addToFront,
  removeFromFront,
  removeFromEnd,
  addToEnd,
} = require("../arrays/array1");
const { alphaArr, numArr } = require("../data/arrayData");

const firstElement = (arr) => {
  return arr[0];
};
const lastElement = (arr) => {
  return arr[arr.length - 1];
};

test("Adds 2 to the front of alphaArr", () => {
  expect(firstElement(addToFront(alphaArr, 2))).toBe(2);
});

test("Adds 'test' to the front of numArr", () => {
  expect(firstElement(addToFront(numArr, "test"))).toBe("test");
});

test("Removes the first index from alphaArr", () => {
  expect(firstElement(removeFromFront(alphaArr))).toBe("B");
});

test("Removes the first index from numArr", () => {
  expect(firstElement(removeFromFront(numArr))).toBe(1);
});

test("Removes the last index from alphaArr", () => {
  expect(lastElement(removeFromEnd(alphaArr))).toBe("y");
});

test("Removes the last index from numArr", () => {
  expect(lastElement(removeFromEnd(numArr))).toBe(149);
});
test("Makes 0 the last index from alphaArr", () => {
  expect(lastElement(addToEnd(alphaArr, 0))).toBe(0);
});

test("Makes 'test' the last index from numArr", () => {
  expect(lastElement(addToEnd(numArr, "test"))).toBe("test");
});
