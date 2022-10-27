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

const validate = (result: string | boolean): string | undefined =>
  typeof result === "string" ? result : undefined;

export const required = (value: Value) =>
  validate(isEmpty(value) && messages.required);

/**
 * E-mail.
 */

export const email = (value: Value) =>
  validate(!isValidEmail(value) && messages.email);

/**
 * Password.
 */

export const password = (value: Value) =>
  validate(!(value && value.length >= 6) && messages.password);

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
      validate(value !== allValues[field] && message)
);

/**
 * CPF.
 */

export const cpf = (value: Value) =>
  validate(value && !isValidCPF(value) && messages.cpf);

/**
 * Phone
 */

export const phone = (value: Value) =>
  validate(value && !isValidPhone(value) && messages.phone);

/**
 * CEP.
 */

export const cep = (value: Value) =>
  validate(value && !/^\d{8}$/.test(value) && messages.cep);

/**
 * Integer.
 */

export const integer = (value: Value) =>
  validate(
    value && parseInt(value, 10) !== value && messages.integer
  );

/**
 * Past Year.
 */

export const pastOrCurrentYear = (value: Value) =>
  validate(
    value &&
      (parseInt(value, 10) !== value ||
        value > new Date().getFullYear()) &&
      messages.pastOrCurrentYear
  );

/**
 * Birth year.
 */

export const birthYear = (value: Value) => {
  const currentYear = new Date().getFullYear();
  const min = currentYear - 130;
  return validate(
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
  validate(value && value.length !== 10 && messages.sqlDate);

/**
 * Birthdate.
 */

export const birthdate = (value: Value) =>
  validate(
    value &&
      (value.length < 10 || !isValidBirthdate(new Date(value))) &&
      messages.birthdate
  );

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
  validate(value && !/^\d{4}$/.test(value) && messages.bankAgency);

/**
 * Bank Account.
 */

export const bankAccount = (value: Value) =>
  validate(
    value &&
      !(
        /^\d+X?$/.test(value) &&
        value.length > 1 &&
        value.length <= 21
      ) &&
      messages.bankAccount
  );
