import { birthYear, birthYearRequired } from "../src";

test.each(["batata", "1", 20000, 3000, 2023, 1890, 1200])(
  "value %j should be considered invalid",
  (input) => {
    expect(birthYear.validate(input)).toBe(
      "Ano de nascimento inválido"
    );
  }
);

test.each([1995, 2000, 2022, 2019])(
  "value %j should be consided valid",
  (input) => {
    expect(birthYear.validate(input)).toBeFalsy();
    expect(birthYearRequired.validate(input)).toBeFalsy();
  }
);

test("birthYearRequired requires a value", () => {
  expect(birthYearRequired.validate("")).toBe("Campo obrigatório");
});

test("parses birthYear", () => {
  expect(birthYear.parse("1995")).toBe(1995);
  expect(birthYearRequired.parse("2022")).toBe(2022);
});

test("formats birthYear", () => {
  expect(birthYear.format(1985)).toBe("1985");
  expect(birthYearRequired.format(2022)).toBe("2022");
});

test("sets the maxLength attribute", () => {
  expect(birthYear.maxLength).toBe(4);
  expect(birthYearRequired.maxLength).toBe(4);
});

test('[web] set the attribute type="tel"', () => {
  expect(birthYear.web.type).toBe("tel");
  expect(birthYearRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(birthYear.reactNative.keyboardType).toBe("number-pad");
  expect(birthYearRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
