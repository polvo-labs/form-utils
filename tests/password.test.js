import { password, passwordRequired } from "../src";

test.each(["abc", ""])(
  "value %j should be considered invalid",
  (input) => {
    expect(password.validate(input)).toBe(
      "Senha precisa conter pelo menos 6 caracteres"
    );
  }
);

test.each(["senhaValida", "123456"])(
  "value %j should be consided valid",
  (input) => {
    expect(password.validate(input)).toBeFalsy();
    expect(passwordRequired.validate(input)).toBeFalsy();
  }
);

test("passwordRequired requires a value", () => {
  expect(passwordRequired.validate("")).toBe("Campo obrigatório");
});

test('[web] set the attribute type="password"', () => {
  expect(password.web.type).toBe("password");
  expect(passwordRequired.web.type).toBe("password");
});

test("[react native] set the prop secureTextEntry", () => {
  expect(password.reactNative.secureTextEntry).toBe(true);
  expect(passwordRequired.reactNative.secureTextEntry).toBe(true);
});
