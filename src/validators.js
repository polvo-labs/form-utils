import {
  isValidEmail,
  isValidCPF,
  isValidPhone,
} from "@brazilian-utils/brazilian-utils";
import isValidBirthdate from "is-valid-birthdate";
import memoize from "./memoize";
import { isEmpty } from "./isEmpty";
import { messages } from "./ messages";

/**
 * Required.
 */

export const required = (value) =>
  isEmpty(value) && messages.required;

/**
 * E-mail.
 */

export const email = (value) =>
  !isValidEmail(value) && messages.email;

/**
 * Password.
 */

export const password = (value) =>
  !(value && value.length >= 6) && messages.password;

/**
 * Match
 */

export const match = memoize(
  ({ field, message = "Campos não batem" }) =>
    (value, allValues) =>
      value !== allValues[field] && message
);

/**
 * CPF.
 */

export const cpf = (value) =>
  value && !isValidCPF(value) && messages.cpf;

/**
 * Phone
 */

export const phone = (value) =>
  value && !isValidPhone(value) && messages.phone;

/**
 * CEP.
 */

export const cep = (value) =>
  value && !/^\d{8}$/.test(value) && messages.cep;

/**
 * Integer.
 */

export const integer = (value) =>
  value && parseInt(value, 10) !== value && messages.integer;

/**
 * Past Year.
 */

export const pastOrCurrentYear = (value) =>
  value &&
  (parseInt(value, 10) !== value ||
    value > new Date().getFullYear()) &&
  messages.pastOrCurrentYear;

/**
 * Birth year.
 */

export const birthYear = (value) => {
  const currentYear = new Date().getFullYear();
  const min = currentYear - 130;
  return (
    value &&
    (parseInt(value, 10) !== value ||
      value < min ||
      value > currentYear) &&
    messages.birthYear
  );
};

/**
 * SQL Date.
 */

export const sqlDate = (value) =>
  value && value.length !== 10 && messages.sqlDate;

/**
 * Birthdate.
 */

export const birthdate = (value) =>
  value &&
  (value.length < 10 || !isValidBirthdate(value)) &&
  messages.birthdate;

/**
 * Length.
 */

export const length = memoize(
  ({ min = 0, max = 255 } = {}) =>
    (value) => {
      if (value) {
        if (value.length < min) {
          return messages.length.min({ min });
        }

        if (value.length > max) {
          return messages.length.max({ max });
        }
      }
    }
);

/**
 * Bank Agency.
 */

export const bankAgency = (value) =>
  value && !/^\d{4,5}$/.test(value) && messages.bankAgency;

/**
 * Bank Account.
 */

export const bankAccount = (value) =>
  value &&
  !(/^\d+X?$/.test(value) && value.length <= 20) &&
  messages.bankAccount;
