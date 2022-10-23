import {
  isValidEmail,
  isValidCPF,
  isValidPhone,
} from "@brazilian-utils/brazilian-utils";
import memoize from "./memoize";
import { isEmpty } from "./isEmpty";
import { messages } from "./messages";
import { Value, AllValues } from "./types";
import { isValidBirthdate } from "./isValidBirthdate";

export const required = (value: Value) =>
  isEmpty(value) && messages.required;

/**
 * E-mail.
 */

export const email = (value: Value) =>
  !isValidEmail(value) && messages.email;

/**
 * Password.
 */

export const password = (value: Value) =>
  !(value && value.length >= 6) && messages.password;

/**
 * Match
 */

export interface MatchOptions {
  field: string;
  message: string;
}

export const match = memoize(
  ({ field, message = "Campos não batem" }: MatchOptions) =>
    (value: Value, allValues: AllValues) =>
      value !== allValues[field] && message
);

/**
 * CPF.
 */

export const cpf = (value: Value) =>
  value && !isValidCPF(value) && messages.cpf;

/**
 * Phone
 */

export const phone = (value: Value) =>
  value && !isValidPhone(value) && messages.phone;

/**
 * CEP.
 */

export const cep = (value: Value) =>
  value && !/^\d{8}$/.test(value) && messages.cep;

/**
 * Integer.
 */

export const integer = (value: Value) =>
  value && parseInt(value, 10) !== value && messages.integer;

/**
 * Past Year.
 */

export const pastOrCurrentYear = (value: Value) =>
  value &&
  (parseInt(value, 10) !== value ||
    value > new Date().getFullYear()) &&
  messages.pastOrCurrentYear;

/**
 * Birth year.
 */

export const birthYear = (value: Value) => {
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

export const sqlDate = (value: Value) =>
  value && value.length !== 10 && messages.sqlDate;

/**
 * Birthdate.
 */

export const birthdate = (value: Value) =>
  value &&
  (value.length < 10 || !isValidBirthdate(new Date(value))) &&
  messages.birthdate;

/**
 * Length.
 */

export interface LengthOptions {
  min: number;
  max: number;
}

export const length = memoize<LengthOptions>(
  ({ min = 0, max = 255 } = {}) =>
    (value: Value) => {
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

export const bankAgency = (value: Value) =>
  value && !/^\d{4}$/.test(value) && messages.bankAgency;

/**
 * Bank Account.
 */

export const bankAccount = (value: Value) =>
  value &&
  !(/^\d+X?$/.test(value) && value.length <= 21) &&
  messages.bankAccount;
