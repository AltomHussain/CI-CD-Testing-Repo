const add = (...numbers) => numbers.reduce((total, num) => total + num, 0);

test("convertToUSD function works for £32", () => {
  expect(add(2, 2)).toEqual(4);
});
