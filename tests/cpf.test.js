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

test("parses CPF", () => {
  expect(cpf.parse("284.185.697-60")).toBe("28418569760");
  expect(cpfRequired.parse("762.456.439-45")).toBe("76245643945");
});

test("formats CPF", () => {
  expect(cpf.format("91233011804")).toBe("912.330.118-04");
  expect(cpfRequired.format("51163771643")).toBe("511.637.716-43");
});

test("sets the maxLength attribute", () => {
  expect(cpf.maxLength).toBe(14);
  expect(cpfRequired.maxLength).toBe(14);
});

test('[web] set the attribute type="tel"', () => {
  expect(cpf.web.type).toBe("tel");
  expect(cpfRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(cpf.reactNative.keyboardType).toBe("number-pad");
  expect(cpfRequired.reactNative.keyboardType).toBe("number-pad");
});
