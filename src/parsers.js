/**
 * Digits.
 */

export const digits = (value) =>
  value && value.length ? value.replace(/\D/g, "") : value;

export const digitsWith = (maxLength) => (value) =>
  value && value.length
    ? value.replace(/\D/g, "").slice(0, maxLength)
    : value;

/**
 * Integer.
 */

export const integer = (value) =>
  value ? parseInt(digits(value), 10) : value;

/**
 * SQL Date.
 */

export const sqlDate = (value = "") => {
  const re = /(\d{2})\/(\d{2})\/(\d{4})/;
  const match = value.match(re);

  if (match) {
    const day = match[1];
    const month = match[2];
    const year = match[3];
    return `${year}-${month}-${day}`;
  }

  return value;
};

/**
 * Bank Account.
 */

export const bankAccount = (value = "") => {
  const lastItem = value.slice(-1).toUpperCase();
  const otherPart = digits(value.slice(0, -1));
  return /X|\d/.test(lastItem) ? otherPart + lastItem : otherPart;
};
