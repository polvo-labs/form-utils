import { match } from "../src";

test.each(["my_password", "my_another_password"])(
  "value %j should be considered invalid",
  (input) => {
    expect(
      match.validate({ field: "password" })(input, {
        password: "some other value",
      })
    ).toBe("Campos não batem");
  }
);

test.each(["senhaValida", "123456"])(
  "value %j should be consided valid",
  (input) => {
    expect(
      match.validate({ field: "password" })(input, {
        password: input,
      })
    ).toBeFalsy();
  }
);
