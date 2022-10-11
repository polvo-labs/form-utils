import { cardNumber, cardNumberRequired } from "../src";

test("cardNumber does not have validation", () => {
  expect(cardNumber.validate).toBeUndefined();
});

test("cardNumberRequired requires a value", () => {
  expect(cardNumberRequired.validate("")).toBe("Campo obrigatório");
});

test("parses cardNumber", () => {
  expect(cardNumber.parse("5444 3968 4278 8031")).toBe(
    "5444396842788031"
  );
  expect(cardNumberRequired.parse("3794 243113 25935")).toBe(
    "379424311325935"
  );
});

test("formats cardNumber", () => {
  expect(cardNumber.format("4556457965820055")).toBe(
    "4556 4579 6582 0055"
  );
});

test("formats amex card number", () => {
  expect(cardNumberRequired.format("344364468509687")).toBe(
    "3443 644685 09687"
  );
});

test("sets the maxLength attribute", () => {
  expect(cardNumber.maxLength).toBe(44);
  expect(cardNumberRequired.maxLength).toBe(44);
});

test("[web] set the correct attributes for card number data", () => {
  const attrs = {
    type: "tel",
    autoComplete: "cc-number",
  };

  expect(cardNumber.web).toEqual(attrs);
  expect(cardNumberRequired.web).toEqual(attrs);
});

test('[react native] set the prop keyboardType="number-pad"', () => {
  expect(cardNumber.reactNative.keyboardType).toBe("number-pad");
  expect(cardNumberRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
