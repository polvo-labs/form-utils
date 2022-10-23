import { email, emailRequired } from "../src";
import { getAttrs } from "../test-utils";

test.each(["invalid_email", ""])(
  "value %j should be considered invalid",
  (input) => {
    expect(email.validate(input)).toBe("E-mail inválido");
  }
);

test.each(["john.doe@example.com"])(
  "value %j should be consided valid",
  (input) => {
    expect(email.validate(input)).toBeFalsy();
    expect(emailRequired.validate(input)).toBeFalsy();
  }
);

test("emailRequired requires a value", () => {
  expect(emailRequired.validate("")).toBe("Campo obrigatório");
});

test('[web] set the attribute type="email"', () => {
  expect(email.web.type).toBe("email");
  expect(getAttrs(emailRequired).web.type).toBe("email");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(email.reactNative.keyboardType).toBe("email-address");
  expect(getAttrs(emailRequired).reactNative.keyboardType).toBe(
    "email-address"
  );
});
