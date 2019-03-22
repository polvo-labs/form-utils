/**
 * Digits.
 */

export const digits = value =>
  value && value.length
    ? value.replace(/\D/g, '')
    : value

/**
 * Integer.
 */

export const integer = value => value
  ? parseInt(digits(value), 10)
  : value
