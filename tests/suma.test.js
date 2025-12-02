const { suma } = require("../src/suma");

test("suma 2 + 3 es 5", () => {
  expect(suma(2, 3)).toBe(5);
});

test("suma números negativos", () => {
  expect(suma(-1, -4)).toBe(-5);
});
