import { cardCode, cardCodeRequired } from "../src";
import { getAttrs } from "../test-utils";

test("cardCode does not have validation", () => {
  expect(cardCode.validate).toBeUndefined();
});

test("cardCodeRequired requires a value", () => {
  expect(cardCodeRequired.validate("")).toBe("Campo obrigatório");
});

test("parses cardCode", () => {
  expect(cardCode.parse("123")).toBe("123");
  expect(cardCodeRequired.parse("1234")).toBe("1234");
});

test("formats cardCode", () => {
  expect(cardCode.format("9876")).toBe("9876");
  expect(cardCode.format("555")).toBe("555");
  expect(cardCode.format("456321455")).toBe("4563");
});

test("sets the maxLength attribute", () => {
  expect(cardCode.maxLength).toBe(4);
  expect(cardCodeRequired.maxLength).toBe(4);
});

test("[web] set the correct attributes for card expiry data", () => {
  const attrs = {
    type: "tel",
    autoComplete: "cc-csc",
  };

  expect(cardCode.web).toEqual(attrs);
  expect(getAttrs(cardCodeRequired).web).toEqual(attrs);
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(cardCode.reactNative.keyboardType).toBe("number-pad");
  expect(getAttrs(cardCodeRequired).reactNative.keyboardType).toBe(
    "number-pad"
  );
});
