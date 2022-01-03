const calculator = require("./calculator");

test("1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("10 x 2 returns 20", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});

test("10 - 5 returns 5", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("10 / 10 returns 1", () => {
    expect(calculator.divide(10, 10)).toBe(1);
});
