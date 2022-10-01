import { cep, cepRequired } from "../src";

test.each([
  "41333",
  "4191234566789901",
  "999334455",
  "abc",
  "00000000000",
  "99999999999",
])("value %j should be considered invalid", (input) => {
  expect(cep.validate(input)).toBe("CEP inválido");
});

test.each(["80010000", "55360000", "80610905"])(
  "value %j should be consided valid",
  (input) => {
    expect(cep.validate(input)).toBeFalsy();
    expect(cepRequired.validate(input)).toBeFalsy();
  }
);

test("cepRequired requires a value", () => {
  expect(cepRequired.validate("")).toBe("Campo obrigatório");
});

test("parses cep", () => {
  expect(cep.parse("80610-905")).toBe("80610905");
  expect(cepRequired.parse("55360-0000000000000")).toBe("55360000");
});

test("formats cep", () => {
  expect(cep.format("80610905")).toBe("80610-905");
  expect(cepRequired.format("55360000")).toBe("55360-000");
});

test("sets the maxLength attribute", () => {
  expect(cep.maxLength).toBe(9);
  expect(cepRequired.maxLength).toBe(9);
});

test('[web] set the attribute type="tel"', () => {
  expect(cep.web.type).toBe("tel");
  expect(cepRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(cep.reactNative.keyboardType).toBe("number-pad");
  expect(cepRequired.reactNative.keyboardType).toBe("number-pad");
});
