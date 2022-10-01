import { pastOrCurrentYear, pastOrCurrentYearRequired } from "../src";

test.each(["banana", "1", 20000, 3000, 2023])(
  "value %j should be considered invalid",
  (input) => {
    expect(pastOrCurrentYear.validate(input)).toBe(
      "Este campo não aceita anos do futuro"
    );
  }
);

test.each([1995, 2000, 1200, 2022, 2019])(
  "value %j should be consided valid",
  (input) => {
    expect(pastOrCurrentYear.validate(input)).toBeFalsy();
    expect(pastOrCurrentYearRequired.validate(input)).toBeFalsy();
  }
);

test("pastOrCurrentYearRequired requires a value", () => {
  expect(pastOrCurrentYearRequired.validate("")).toBe(
    "Campo obrigatório"
  );
});

test("parses pastOrCurrentYear", () => {
  expect(pastOrCurrentYear.parse("1995")).toBe(1995);
  expect(pastOrCurrentYearRequired.parse("2022")).toBe(2022);
});

test("formats pastOrCurrentYear", () => {
  expect(pastOrCurrentYear.format(1985)).toBe("1985");
  expect(pastOrCurrentYearRequired.format(2022)).toBe("2022");
});

test("sets the maxLength attribute", () => {
  expect(pastOrCurrentYear.maxLength).toBe(4);
  expect(pastOrCurrentYearRequired.maxLength).toBe(4);
});

test('[web] set the attribute type="tel"', () => {
  expect(pastOrCurrentYear.web.type).toBe("tel");
  expect(pastOrCurrentYearRequired.web.type).toBe("tel");
});

test('[react native] set the prop keyboardType="email-address"', () => {
  expect(pastOrCurrentYear.reactNative.keyboardType).toBe(
    "number-pad"
  );
  expect(pastOrCurrentYearRequired.reactNative.keyboardType).toBe(
    "number-pad"
  );
});
