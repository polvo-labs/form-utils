import { email, emailRequired } from "../src";

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
