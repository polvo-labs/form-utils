import { isEmpty } from "../src/isEmpty";

test.each(["", "     ", null, undefined, [], {}])(
  "%j should be considered empty",
  (input) => {
    expect(isEmpty(input)).toBe(true);
  }
);

test.each([
  "a",
  "  a",
  "a  ",
  { foo: "bar" },
  { length: 1 },
  [1],
  0,
  1,
])("%j should not be considered empty", (input) => {
  expect(isEmpty(input)).toBe(false);
});
