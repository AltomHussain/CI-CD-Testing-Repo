const add = (...numbers) => numbers.reduce((total, num) => total + num, 0);

console.log(add(2, 2));

// describe("adder", () => {
//   it("should add two numbers", () => {
//     expect(add(2, 2)).toBe(8);
//   });

test("convertToUSD function works for £32", () => {
  expect(add(2, 2)).toEqual(4);
});
