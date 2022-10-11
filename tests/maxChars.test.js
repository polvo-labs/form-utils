import { maxChars } from "../src/maxChars";

test("maxChars", () => {
  const spy = (value) => value.toUpperCase(0);
  const fn = maxChars(10, spy);

  expect(fn("my string")).toBe("MY STRING");
  expect(fn("large string teste here")).toBe("LARGE STRI");
});
