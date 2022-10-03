import { bankAgency, bankAgencyRequired } from "../src";

test.each(["1", "123Z", "12", "abcde", "123456"])(
  "value %j should be considered invalid",
  (input) => {
    expect(bankAgency.validate(input)).toBe("Agência inválida");
  }
);

test.each(["1234", "22005", "0001", "0000", "00000"])(
  "value %j should be consided valid",
  (input) => {
    expect(bankAgency.validate(input)).toBeFalsy();
    expect(bankAgencyRequired.validate(input)).toBeFalsy();
  }
);

test("bankAgencyRequired requires a value", () => {
  expect(bankAgencyRequired.validate("")).toBe("Campo obrigatório");
});

test("parses bankAgency", () => {
  expect(bankAgency.parse("1234")).toBe("1234");
  expect(bankAgency.parse("98765")).toBe("98765");
  expect(bankAgencyRequired.parse("123456789")).toBe("12345");
});

test("formats bankAgency", () => {
  expect(bankAgency.parse("1234")).toBe("1234");
  expect(bankAgency.parse("98765")).toBe("98765");
  expect(bankAgencyRequired.parse("123456789")).toBe("12345");
});

test("sets the maxLength attribute", () => {
  expect(bankAgency.maxLength).toBe(5);
  expect(bankAgencyRequired.maxLength).toBe(5);
});

test('[web] set the attribute type="tel"', () => {
  expect(bankAgency.web.type).toBe("tel");
  expect(bankAgencyRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(bankAgency.reactNative.keyboardType).toBe("number-pad");
  expect(bankAgencyRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
