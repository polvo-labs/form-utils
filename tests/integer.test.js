import { integer, integerRequired } from "../src";

test.each(["abc", "X", "numero10", "13b"])(
  "value %j should be considered invalid",
  (input) => {
    expect(integer.validate(input)).toBe("Número inteiro inválido");
  }
);

test.each([1, 2022, 4000])(
  "value %j should be consided valid",
  (input) => {
    expect(integer.validate(input)).toBeFalsy();
    expect(integerRequired.validate(input)).toBeFalsy();
  }
);

test("integerRequired requires a value", () => {
  expect(integerRequired.validate("")).toBe("Campo obrigatório");
});

test("parses integer", () => {
  expect(integer.parse("1")).toBe(1);
  expect(integerRequired.parse("553600")).toBe(553600);
});

test("formats integer", () => {
  expect(integer.format("1a2b3c4d5")).toBe("12345");
  expect(integerRequired.format("test13")).toBe("13");
});

test('[web] set the attribute type="tel"', () => {
  expect(integer.web.type).toBe("tel");
  expect(integerRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(integer.reactNative.keyboardType).toBe("number-pad");
  expect(integerRequired.reactNative.keyboardType).toBe("number-pad");
});
