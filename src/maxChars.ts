import { Value } from "./types";

export function maxChars(maxLength: number, fn: Function) {
  return (value: Value) =>
    fn(typeof value === "string" ? value.slice(0, maxLength) : value);
}
