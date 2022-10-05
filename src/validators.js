import isEmail from "is-email";
import isCPF from "iscpf";
import isValidBirthdate from "is-valid-birthdate";
import telefone from "telefone";
import memoize from "./memoize";
import { isEmpty } from "./isEmpty";

/**
 * Required.
 */

export const required = (value) =>
  isEmpty(value) && "Campo obrigatório";

/**
 * E-mail.
 */

export const email = (value) => !isEmail(value) && "E-mail inválido";

/**
 * Password.
 */

export const password = (value) =>
  !(value && value.length >= 6) &&
  "Senha precisa conter pelo menos 6 caracteres";

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
  value && !isCPF(value) && "CPF inválido";

/**
 * Phone
 */

export const phone = (value) =>
  value && !telefone.parse(value) && "Telefone inválido";

/**
 * CEP.
 */

export const cep = (value) =>
  value && !/^\d{8}$/.test(value) && "CEP inválido";

/**
 * Integer.
 */

export const integer = (value) =>
  value && parseInt(value, 10) !== value && "Número inteiro inválido";

/**
 * Past Year.
 */

export const pastOrCurrentYear = (value) =>
  value &&
  (parseInt(value, 10) !== value ||
    value > new Date().getFullYear()) &&
  "Este campo não aceita anos do futuro";

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
    "Ano de nascimento inválido"
  );
};

/**
 * SQL Date.
 */

export const sqlDate = (value) =>
  value && value.length !== 10 && "Data inválida";

/**
 * Birthdate.
 */

export const birthdate = (value) =>
  value &&
  (value.length < 10 || !isValidBirthdate(value)) &&
  "Data inválida";

/**
 * Length.
 */

export const length = memoize(
  ({ min = 0, max = 255 } = {}) =>
    (value) => {
      if (value) {
        if (value.length < min) {
          return `Campo deve ter no mínimo ${min} caracteres`;
        }

        if (value.length > max) {
          return `Campo deve ter no máximo ${max} caracteres`;
        }
      }
    }
);

/**
 * Bank Agency.
 */

export const bankAgency = (value) =>
  value && !/^\d{4,5}$/.test(value) && "Agência inválida";

/**
 * Bank Account.
 */

export const bankAccount = (value) =>
  value &&
  !(/^\d+X?$/.test(value) && value.length <= 20) &&
  "Número da conta inválido";
