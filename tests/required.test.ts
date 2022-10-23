import { required } from "../src";

test.each([
  "",
  "                           ",
  null,
  undefined,
  {},
  [],
])("value %j should be considered invalid", (input) => {
  expect(required.validate(input)).toBe("Campo obrigatório");
});

test.each([
  "foo",
  "foo  bar   baz",
  [1],
  [1, 2, 3],
  { prop: "value" },
  100,
])("value %j should be consided valid", (input) => {
  expect(required.validate(input)).toBeFalsy();
});
