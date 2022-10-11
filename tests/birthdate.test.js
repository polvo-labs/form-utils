import { birthdate, birthdateRequired } from "../src";

test.each([
  "10/06/19",
  "4191234566789901",
  "999334455",
  "abc",
  "99999999999",
  "1895-06-10",
  "1900-01-01",
])("value %j should be considered invalid", (input) => {
  expect(birthdate.validate(input)).toBe("Data inválida");
});

test.each(["1995-06-10", "2022-10-01"])(
  "value %j should be consided valid",
  (input) => {
    expect(birthdate.validate(input)).toBeFalsy();
    expect(birthdateRequired.validate(input)).toBeFalsy();
  }
);

test("birthdateRequired requires a value", () => {
  expect(birthdateRequired.validate("")).toBe("Campo obrigatório");
});

test("parses birthdate", () => {
  expect(birthdate.parse("10/06/1995")).toBe("1995-06-10");
  expect(birthdateRequired.parse("01/10/2022")).toBe("2022-10-01");
});

test("formats birthdate", () => {
  expect(birthdate.format("10061995")).toBe("10/06/1995");
  expect(birthdateRequired.format("01102022")).toBe("01/10/2022");
});

test("sets the maxLength attribute", () => {
  expect(birthdate.maxLength).toBe(10);
  expect(birthdateRequired.maxLength).toBe(10);
});

test('[web] set the attribute type="tel"', () => {
  expect(birthdate.web.type).toBe("tel");
  expect(birthdateRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(birthdate.reactNative.keyboardType).toBe("number-pad");
  expect(birthdateRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
