import { sqlDate, sqlDateRequired } from "../src";
import { getAttrs } from "../test-utils";

test.each([
  "10/06/19",
  "4191234566789901",
  "999334455",
  "abc",
  "00000000000",
  "99999999999",
])("value %j should be considered invalid", (input) => {
  expect(sqlDate.validate(input)).toBe("Data inválida");
});

test.each(["1995-06-10", "2022-10-01"])(
  "value %j should be consided valid",
  (input) => {
    expect(sqlDate.validate(input)).toBeFalsy();
    expect(sqlDateRequired.validate(input)).toBeFalsy();
  }
);

test("sqlDateRequired requires a value", () => {
  expect(sqlDateRequired.validate("")).toBe("Campo obrigatório");
});

test("parses sqlDate", () => {
  expect(sqlDate.parse("10/06/1995")).toBe("1995-06-10");
  expect(sqlDateRequired.parse("01/10/2022")).toBe("2022-10-01");
});

test("formats sqlDate", () => {
  expect(sqlDate.format("10061995")).toBe("10/06/1995");
  expect(sqlDateRequired.format("01102022")).toBe("01/10/2022");
});

test("sets the maxLength attribute", () => {
  expect(sqlDate.maxLength).toBe(10);
  expect(sqlDateRequired.maxLength).toBe(10);
});

test('[web] set the attribute type="tel"', () => {
  expect(sqlDate.web.type).toBe("tel");
  expect(getAttrs(sqlDateRequired).web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(sqlDate.reactNative.keyboardType).toBe("number-pad");
  expect(getAttrs(sqlDateRequired).reactNative.keyboardType).toBe(
    "number-pad"
  );
});
