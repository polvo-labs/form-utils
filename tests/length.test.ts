import { length, lengthRequired } from "../src";

test.each([
  ["John Doe", { min: 0, max: 5 }],
  ["Polvo", { min: 2, max: 4 }],
  ["JavaScript is awesome", { max: 10 }],
])("value %j should be considered invalid", (value, rules) => {
  expect(length(rules).validate(value)).toBe(
    `Campo deve ter no máximo ${rules.max} caracteres`
  );
});

test.each([
  ["John Doe", { min: 10, max: 5 }],
  ["Polvo", { min: 20, max: 4 }],
  ["JavaScript is awesome", { min: 50 }],
])("value %j should be considered invalid", (value, rules) => {
  expect(length(rules).validate(value)).toBe(
    `Campo deve ter no mínimo ${rules.min} caracteres`
  );
});

test.each([
  ["some string", undefined],
  ["john.doe@example.com", {}],
  ["Alan Turing", { min: 0, max: 100 }],
])("value %j should be consided valid", (value, rules) => {
  expect(length(rules).validate(value)).toBeFalsy();
  expect(lengthRequired(rules).validate(value)).toBeFalsy();
});

test("sets the maxLength attribute", () => {
  expect(length().maxLength).toBe(255);
  expect(lengthRequired({ max: 100 }).maxLength).toBe(100);
  expect(lengthRequired({ min: 6, max: 14 }).maxLength).toBe(14);
});

test("lengthRequired requires a value", () => {
  expect(lengthRequired().validate("")).toBe("Campo obrigatório");
});
