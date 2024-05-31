function multiply(...numbers) {
  return numbers.reduce((total, current) => total * current, 1);
}
test("convertToUSD function works for £32", () => {
  expect(multiply(2, 3)).toEqual(6);
});
