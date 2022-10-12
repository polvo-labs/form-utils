import { fit } from "msk";
import * as parsers from "./parsers";

/**
 * CPF.
 */

export const cpf = (value = "") => fit(value, "999.999.999-99");

/**
 * Phone.
 */

export const phone = (value = "") =>
  value.length === 11
    ? fit(value, "(99) 99999-9999")
    : fit(value, "(99) 9999-9999");

/**
 * CEP.
 */

export const cep = (value = "") => fit(value, "99999-999");

/**
 * Currency.
 */

export const currency = (value = "") =>
  value
    .toString()
    .replace(/\D+/g, "")
    .replace(/(\d+)(\d{2})$/, "$1,$2")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

/**
 * Integer.
 */

export const integer = (value = "") => fit(value, "999999999999");

/**
 * Year.
 */

export const year = (value = "") => fit(value, "9999");

/**
 * Card Number.
 */

export const cardNumber = (value = "") =>
  /^(37|34)/.test(value)
    ? fit(value, "9999 999999 99999")
    : fit(value, "9999 9999 9999 9999 9999 9999 9999 9999 9999");

/**
 * Card expiry.
 */

export const cardExpiry = (value = "") => fit(value, "99/99");

/**
 * Card code.
 */

export const cardCode = (value = "") => fit(value, "9999");

/**
 * SQL Date.
 */

export const sqlDate = (value = "") => {
  const re = /(\d{4})-(\d{2})-(\d{2})/;
  const match = value.match(re);

  if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];
    return `${day}/${month}/${year}`;
  }

  return fit(value, "99/99/9999");
};

/**
 * Bank Account.
 */

export const bankAccount = (value = "") => {
  const transformedValue = parsers.bankAccount(value);

  const addDash = (account) => {
    if (account.length > 1) {
      const firstPart = account.slice(0, -1);
      const secondPart = account.slice(-1);
      return `${firstPart}-${secondPart}`;
    }

    return account;
  };

  const lastItem = transformedValue.slice(-1).toUpperCase();
  const otherPart = parsers.digits(transformedValue.slice(0, -1));
  return /X|\d/.test(lastItem)
    ? addDash(otherPart + lastItem)
    : addDash(otherPart);
};
