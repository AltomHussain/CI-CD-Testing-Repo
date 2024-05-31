const add = (...numbers) => numbers.reduce((total, num) => total + num, 0);

test("Adds two numbers", () => {
  expect(add(2, 2)).toEqual(4);
});
test("Adds two numbers", () => {
  expect(add(2, 3)).toEqual(5);
});
