import { cardExpiry, cardExpiryRequired } from "../src";
import { getAttrs } from "../test-utils";

test("cardExpiry does not have validation", () => {
  expect(cardExpiry.validate).toBeUndefined();
});

test("cardExpiryRequired requires a value", () => {
  expect(cardExpiryRequired.validate("")).toBe("Campo obrigatório");
});

test("parses cardExpiry", () => {
  expect(cardExpiry.parse("07/30")).toBe("0730");
  expect(cardExpiryRequired.parse("10/28")).toBe("1028");
});

test("formats cardExpiry", () => {
  expect(cardExpiry.format("0330")).toBe("03/30");
});

test("sets the maxLength attribute", () => {
  expect(cardExpiry.maxLength).toBe(5);
  expect(cardExpiryRequired.maxLength).toBe(5);
});

test("[web] set the correct attributes for card expiry data", () => {
  const attrs = {
    type: "tel",
    autoComplete: "cc-exp",
  };

  expect(cardExpiry.web).toEqual(attrs);
  expect(getAttrs(cardExpiryRequired).web).toEqual(attrs);
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(cardExpiry.reactNative.keyboardType).toBe("number-pad");
  expect(getAttrs(cardExpiryRequired).reactNative.keyboardType).toBe(
    "number-pad"
  );
});
