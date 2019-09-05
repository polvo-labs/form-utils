import { memoizeWith, identity, isEmpty } from 'ramda'
import isEmail from 'is-email'
import isCPF from 'iscpf'

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

export const phone = value => value && !/\d{10,11}/.test(value) &&
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
