export function maxChars(maxLength, fn) {
  return (value) =>
    fn(typeof value === "string" ? value.slice(0, maxLength) : value);
}
