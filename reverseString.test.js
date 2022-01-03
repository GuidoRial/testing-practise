const reverseString = require("./reverseString");

test("returns a reversed string", () => {
    expect(reverseString("guido")).toBe("odiug");
    expect(reverseString("Hi, I hope you're doing great")).toBe("taerg gniod er'uoy epoh I ,iH");
});
