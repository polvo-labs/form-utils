import { currency, currencyRequired } from "../src";

test("currency does not have a validator", () => {
  expect(currency.validate).toBeUndefined();
});

test("currencyRequired requires a value", () => {
  expect(currencyRequired.validate("")).toBe("Campo obrigatório");
});

test("parses currency", () => {
  expect(currency.parse("1,00")).toBe(100);
  expect(currency.parse("120,00")).toBe(12000);
  expect(currency.parse("350.300,00")).toBe(35030000);
});

test("formats cep", () => {
  expect(currency.format(150)).toBe("1,50");
  expect(currency.format(15055)).toBe("150,55");
  expect(currency.format(161345013)).toBe("1.613.450,13");
});

test('[web] set the attribute type="tel"', () => {
  expect(currency.web.type).toBe("tel");
  expect(currencyRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(currency.reactNative.keyboardType).toBe("number-pad");
  expect(currencyRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
