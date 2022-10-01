import { cpf, cpfRequired } from "../src";

test.each([
  "443883666554",
  "111",
  "abc",
  "00000000000",
  "99999999999",
])("value %j should be considered invalid", (input) => {
  expect(cpf.validate(input)).toBe("CPF inválido");
});

test.each([
  "51163771643",
  "28418569760",
  "84635302571",
  "76245643945",
  "91233011804",
])("value %j should be consided valid", (input) => {
  expect(cpf.validate(input)).toBeFalsy();
  expect(cpfRequired.validate(input)).toBeFalsy();
});

test("cpfRequired requires a value", () => {
  expect(cpfRequired.validate("")).toBe("Campo obrigatório");
});

test("sets the maxLength attribute", () => {
  expect(cpf.maxLength).toBe(14);
  expect(cpfRequired.maxLength).toBe(14);
});

test('[web] set the attribute type="tel"', () => {
  expect(cpf.web.type).toBe("tel");
  expect(cpfRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(cpf.reactNative.keyboardType).toBe("number-pad");
  expect(cpfRequired.reactNative.keyboardType).toBe("number-pad");
});
