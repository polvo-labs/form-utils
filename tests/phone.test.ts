import { phone, phoneRequired } from "../src";
import { getAttrs } from "../test-utils";

test.each([
  "41333",
  "4191234566789901",
  "999334455",
  "abc",
  "00000000000",
  "00999999999",
])("value %j should be considered invalid", (input) => {
  expect(phone.validate(input)).toBe("Telefone inválido");
});

test.each(["4132646917", "68971329847", "83983014528"])(
  "value %j should be consided valid",
  (input) => {
    expect(phone.validate(input)).toBeFalsy();
    expect(phoneRequired.validate(input)).toBeFalsy();
  }
);

test("phoneRequired requires a value", () => {
  expect(phoneRequired.validate("")).toBe("Campo obrigatório");
});

test("parses phone", () => {
  expect(phone.parse("(41) 3333-3333")).toBe("4133333333");
  expect(phoneRequired.parse("(98) 98541-8040")).toBe("98985418040");
});

test("formats phone", () => {
  expect(phone.format("43972465646")).toBe("(43) 97246-5646");
  expect(phoneRequired.format("1135571920")).toBe("(11) 3557-1920");
  expect(phone.format("043972465646")).toBe("(43) 97246-5646");
});

test("sets the maxLength attribute", () => {
  expect(phone.maxLength).toBe(15);
  expect(phoneRequired.maxLength).toBe(15);
});

test('[web] set the attribute type="tel"', () => {
  expect(phone.web.type).toBe("tel");
  expect(getAttrs(phoneRequired).web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(phone.reactNative.keyboardType).toBe("phone-pad");
  expect(getAttrs(phoneRequired).reactNative.keyboardType).toBe(
    "phone-pad"
  );
});
