import { bankAccount, bankAccountRequired } from "../src";

test.each([
  "abc",
  "1",
  "123X1",
  "1234567890987654321011",
  "123456789098765432109X",
  "1234567890987654321234567899877665623423423432432423",
])("value %j should be considered invalid", (input) => {
  expect(bankAccount.validate(input)).toBe(
    "Número da conta inválido"
  );
});

test.each([
  "12",
  "1234",
  "22005",
  "0001",
  "0000",
  "00000",
  "1234X",
  "12345678909876543210",
  "123456789098765432109",
])("value %j should be consided valid", (input) => {
  expect(bankAccount.validate(input)).toBeFalsy();
  expect(bankAccountRequired.validate(input)).toBeFalsy();
});

test("bankAccountRequired requires a value", () => {
  expect(bankAccountRequired.validate("")).toBe("Campo obrigatório");
});

test("parses bankAccount", () => {
  expect(bankAccount.parse("123-4")).toBe("1234");
  expect(bankAccount.parse("9876-5")).toBe("98765");
  expect(bankAccount.parse("1")).toBe("1");
  expect(bankAccount.parse("X")).toBe("X");
  expect(bankAccount.parse("")).toBe("");
  expect(bankAccount.parse("1-X")).toBe("1X");
  expect(bankAccount.parse("X-9")).toBe("9");
  expect(bankAccountRequired.parse("12345678-9")).toBe("123456789");
  expect(bankAccountRequired.parse("1995-x")).toBe("1995X");
  expect(bankAccountRequired.parse("199X-3")).toBe("1993");
  expect(bankAccountRequired.parse("19X9-5")).toBe("1995");

  expect(bankAccountRequired.parse("19X9-5")).toBe("1995");
});

test("formats bankAccount", () => {
  expect(bankAccount.format("1234")).toBe("123-4");
  expect(bankAccount.format("98765")).toBe("9876-5");
  expect(bankAccount.format("1234X")).toBe("1234-X");
  expect(bankAccount.format("1234x")).toBe("1234-X");
  expect(bankAccountRequired.format("123456789")).toBe("12345678-9");
  expect(
    bankAccountRequired.format(
      "1234567890987654321234567899877665623423423432432421"
    )
  ).toBe("12345678909876543212-3");
  expect(
    bankAccountRequired.format(
      "0980486049802341319-3801238120931312399103"
    )
  ).toBe("09804860498023413193-8");
});

test("sets the maxLength attribute", () => {
  expect(bankAccount.maxLength).toBe(22);
  expect(bankAccountRequired.maxLength).toBe(22);
});
