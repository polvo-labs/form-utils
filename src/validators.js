import { memoizeWith, identity, isEmpty } from 'ramda'
import isEmail from 'is-email'
import isCPF from 'iscpf'
import isValidBirthdate from 'is-valid-birthdate'
import telefone from 'telefone'

/**
 * Required.
 */

export const required = value => (isEmpty(value) || value == null) &&
  'Campo obrigatório'

/**
 * E-mail.
 */

export const email = value =>
  !isEmail(value) && 'E-mail inválido'

/**
 * Password.
 */

export const password = value =>
  !(value && value.length >= 6) && 'Senha precisa conter pelo menos 6 caracteres'

/**
 * Match
 */

export const match = memoizeWith(
  identity,
  ({ field, message = 'Campos não batem' }) =>
    (value, allValues) => value !== allValues[field] && message
)

/**
 * CPF.
 */

export const cpf = value =>
  !isCPF(value) && 'CPF inválido'

/**
 * Phone
 */

export const phone = value => value && !telefone.parse(value) &&
  'Telefone inválido'

/**
 * CEP.
 */

export const cep = value => value && !/\d{8}/.test(value) &&
  'CEP inválido'

/**
 * Integer.
 */

export const integer = value =>
  (value && parseInt(value, 10) !== value) &&
  'Número inteiro inválido'

/**
 * Past Year.
 */

export const pastOrCurrentYear = value =>
  (value && (parseInt(value, 10) !== value || value > (new Date()).getFullYear())) &&
  'Ano do passado inválido'

/**
 * SQL Date.
 */

export const sqlDate = value => value && value.length < 10 &&
  'Data inválida'

/**
 * Birthdate.
 */

export const birthdate = value => value && (value.length < 10 || !isValidBirthdate(value)) &&
  'Data inválida'

/**
 * Length.
 */

export const length = ({ min = 0, max = 255 }) => value => value && (value < min || value > max) &&
  `Campo deve ter entre ${min} e ${max} caracteres`
