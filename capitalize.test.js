const capitalize = require("./capitalize");

test("returns a correctly written name", () => {
    expect(capitalize("guido")).toBe("Guido");
    expect(capitalize("juan")).toBe("Juan");
    expect(capitalize("pedro")).toBe("Pedro");
});
