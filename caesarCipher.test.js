const caesarCipher = require("./caesarCipher");

test("CAESAR CIPHER TEST 1", () => {
    expect(caesarCipher("Guido", 1)).toBe("Hvjep");
});

test("CAESAR CIPHER TEST 2", () => {
    expect(caesarCipher("what a wonderful day", 3)).toBe(
        "zkdw d zrqghuixo gdb"
    );
});

test("CAESAR CIPHER TEST 3", () => {
    expect(caesarCipher("i really need to sleep early tonight!", 6)).toBe(
        "o xkgrre tkkj zu yrkkv kgxre zutomnz!"
    );
});

test("CAESAR CIPHER TEST 4", () => {
    expect(caesarCipher("going to work", 11)).toBe("rztyr ez hzcv");
});

test("handle negative numbers", () => {
    expect(caesarCipher("hello world", -10)).toBe("xubbe mehbt");
});

test("handle large positive shifts", () =>
    expect(caesarCipher("hello world", 1000)).toBe("tqxxa iadxp"));

test("handle capitals", () =>
    expect(caesarCipher("HeLlO WoRlD", 5)).toBe("MjQqT BtWqI"));